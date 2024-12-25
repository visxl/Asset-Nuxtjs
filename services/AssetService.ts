import axios from "axios";

const ASSET_BASE_REST_API_URL = 'http://localhost:8081/api/asset';

interface Asset {
    id: number;
    assetName: string;
    model: string;
    brand: string;
    code: string;
    date: string;
    price: number;
    user: string;
    other: string;
    office: string;
    status: boolean | number;
  }

class AssetService {
  getAllAsset() {
    return axios.get<Asset[]>(ASSET_BASE_REST_API_URL + "/report");
  }
}

export default new AssetService();
