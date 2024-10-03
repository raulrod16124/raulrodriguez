function isInputSafe(input: string): boolean {
  const dangerousPatterns = /(<script.*?>|javascript:|on\w+=|['"]\s*=\s*['"]|--|#|;|\/\*|\*\/|%0A|%0D|%27|%22|%3C|%3E|%26)/gi;

  return !dangerousPatterns.test(input);
}

function checkShortText(input: string): string {
    if(input.length < 3){
        return "Short text error, at least 3 characters";
    }
    return "safe";
}

function checkEmptyText(input: string): string {
    if(input.length < 1){
        return "Empty text error, fill in the fields";
    } 
    return "safe";
}

function checkInputSecurity(input: string): string {
    if (isInputSafe(input)) {
        return "safe";;
    }
    return "Unsafe input detected!";
}

export function checkInput(input: string, callback: (error?: string) => void): void {
    const emptyText = checkEmptyText(input);
    const shortText = checkShortText(input);
    const securityText = checkInputSecurity(input);
    
    if(emptyText !== "safe"){
        callback(emptyText)
    } else if(shortText !== "safe"){
        callback(shortText)
    } else if( securityText !== "safe"){
        callback(securityText)
    } else {
        callback(undefined)
    }
}