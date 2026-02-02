import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Разрешаем только POST запросы
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Метод не разрешен' });
    }

    try {
        const dataF = req.body;

        const data = await resend.emails.send({
            from: 'algo-web@resend.dev',
            to: 'prodseoy@gmail.com',
            subject: 'Новая заявка с сайта ALGO',
            html: `
        <h2>Новая заявка с сайта ALGO WEB</h2>
        <p><strong>Название бота:</strong> ${dataF.botName}</p>
         <p><strong>Связь через:</strong> ${dataF.contactChanel}</p>
        <p><strong>Имя:</strong> ${dataF.userName}</p>
        <p><strong>Аккаут или почта:</strong> ${dataF.account}</p>
      `
        });

        return res.status(200).json({ success: true, data });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}