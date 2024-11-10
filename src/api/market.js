import axiosInstance from './axiosInstance';

export const fetchMarkets = async () => {
  try {
    const response = await axiosInstance.get('/mkt/markets/');
    return response.data;
  } catch (error) {
    console.error('Error fetching markets:', error);
    throw error;
  }
};

export const fetchOrders = async (marketId, type) => {
  try {
    const response = await axiosInstance.get(`/mth/actives/${marketId}/?type=${type}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const fetchTrades = async (marketId) => {
  try {
    const response = await axiosInstance.get(`/mth/matches/${marketId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trades:', error);
    throw error;
  }
};