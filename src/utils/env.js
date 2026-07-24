import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '../../.env');

config({ path: envPath });

export const obj = {
    PORT: Number(process.env.PORT) || 3000,
    MONGO_URI: String(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/examdb")
}