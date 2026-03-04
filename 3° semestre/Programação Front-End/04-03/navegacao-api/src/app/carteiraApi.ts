import axios from 'axios';
import ICarteira from './carteiraInterface';

export const api = axios.create({
  baseURL: 'http://aledocs.runasp.net/api/cie',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ListarCarteiras = async (): Promise<ICarteira[]> => {
  const response = await api.get<ICarteira[]>('');
  return response.data;
};

export const BuscarCarteiraPorId = async (id: String): Promise<ICarteira> => {
  const response = await api.get<ICarteira>(`/${id}`);
  return response.data;
};

export const AtualizarCarteira = async (id: String, cartao: ICarteira): Promise<ICarteira> => {
  const payload = {
    ...cartao,
    nascimento: cartao.nascimento instanceof Date 
      ? cartao.nascimento.toISOString().split('T')[0] 
      : cartao.nascimento
  };
  const response = await api.put<ICarteira>(`/${id}`, payload);
  return response.data;
};

export const InserirCarteira = async (cartao: ICarteira): Promise<ICarteira> => {
  const { id, ...carataoBemvindo } = cartao; // Exclude id for POST
  const payload = {
    ...carataoBemvindo,
    nascimento: cartao.nascimento instanceof Date 
      ? cartao.nascimento.toISOString().split('T')[0] 
      : cartao.nascimento
  };
  const response = await api.post<ICarteira>('', payload);
  console.log(response.data)
  return response.data;
};