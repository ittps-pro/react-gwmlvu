import axios, { AxiosInstance } from 'axios';

class StrapiClient {
  private client: AxiosInstance;

  constructor(baseURL: string, token?: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
  }

  async find(contentType: string, params: object = {}) {
    try {
      const response = await this.client.get(`/${contentType}`, { params });
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${contentType}:`, error);
      throw error;
    }
  }

  async findOne(contentType: string, id: string | number) {
    try {
      const response = await this.client.get(`/${contentType}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${contentType} with id ${id}:`, error);
      throw error;
    }
  }

  async create(contentType: string, data: object) {
    try {
      const response = await this.client.post(`/${contentType}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error creating ${contentType}:`, error);
      throw error;
    }
  }

  async update(contentType: string, id: string | number, data: object) {
    try {
      const response = await this.client.put(`/${contentType}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating ${contentType} with id ${id}:`, error);
      throw error;
    }
  }

  async delete(contentType: string, id: string | number) {
    try {
      const response = await this.client.delete(`/${contentType}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting ${contentType} with id ${id}:`, error);
      throw error;
    }
  }
}

export default StrapiClient;
