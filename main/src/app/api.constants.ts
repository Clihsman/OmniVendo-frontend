// src/app/config/api.constants.ts

import { PLATFORM_ID } from "@angular/core";

export const API_PROTOCOL = 'http';
export const API_HOST = 'localhost';
export const API_PORT = '3001';
export const API_BASE_PATH = '/api/v1';

export const API_URL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}${API_BASE_PATH}`;

export const ENDPOINTS = {
  AUTHENTICATE: `${API_URL}/app/auth/authenticate`,
  //USERS: `${API_URL}/users`,
  //PRODUCTS: `${API_URL}/products`,
  PLATFORM: `${API_URL}/app/platform`,
  ADAPTERS: `${API_URL}/app/adapters`,
  // Agrega más endpoints según tus servicios
};
