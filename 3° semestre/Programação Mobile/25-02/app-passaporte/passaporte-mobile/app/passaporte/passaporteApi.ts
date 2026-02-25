import axios from 'axios';
import IPassaporte from './passaporteInterface';

export const api = axios.create({
  baseURL: 'http://apidocs.runasp.net/api/passaporte',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ListarPassaportes = async (): Promise<IPassaporte[]> => {
  const response = await api.get<IPassaporte[]>('');
  return response.data;
};

export const BuscarPassaportePorId = async (id: String): Promise<IPassaporte> => {
  const response = await api.get<IPassaporte>(`/${id}`);
  return response.data;
};