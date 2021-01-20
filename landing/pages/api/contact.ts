import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { apiUrl } from '../../utils/url';
import { ContactForm } from '../../interfaces';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const url = `${apiUrl}/form`;
	const payload = req.body;
	try {
		const response = await axios.post<ContactForm>(url, payload);
		res.status(201).send(response.data);
	} catch (error) {
		console.log(error);
		res.status(500).send({message: "Oogie"})
	}
}