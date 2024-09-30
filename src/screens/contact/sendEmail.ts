import emailjs from 'emailjs-com';

export const sendFormDataByEmail = async (
  templateParams: { [key: string]: string },
  serviceId: string,
  templateId: string,
  userId: string
): Promise<string> => {
  return await emailjs
    .send(serviceId, templateId, templateParams, userId)
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        return "SUCCESS";
    })
    .catch((error) => {
        console.error('FAILED...', error);
        return "FAILED";
    });
};