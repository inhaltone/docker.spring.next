import ApiEndpoints from "@/constants/ApiEndpoints";
import {getBasicAuth} from "@/auth/auth";
import {ErrorResponse, PageParams} from "@/types/serviceTypes";
import {EngineerModel, EngineerPagedResponse, SaveEngineerParams} from "@/types/engineer";

export default class EngineerService {

    static async getAllEngineersPaged({page, size}: PageParams): Promise<EngineerPagedResponse> {
        try {
            const response = await fetch(`${ApiEndpoints.GET_ALL_ENGINEERS}?page=${page}&size=${size}`, {
                headers: {
                    'Authorization': getBasicAuth(),
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                throw 'Bad Response!!!!'
            }

            return await response.json();

        } catch (e) {
            return Promise.reject(e);
        }
    }

    static async saveEngineer(params: SaveEngineerParams): Promise<EngineerModel> {
        try {
            const response = await fetch(ApiEndpoints.SAVE_ENGINEER, {
                method: 'POST',
                headers: {
                    'Authorization': getBasicAuth(),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params)
            });

            if (!response.ok) {
                const result: ErrorResponse = await response.json();
                return Promise.reject(new Error(result.message));
            }

            return await response.json();
        } catch (e) {
            return Promise.reject(e);
        }
    }

    static async delete(engineerId: string) {
        try {
            const response = await fetch(ApiEndpoints.DELETE_ENGINEER, {
                method: 'POST',
                headers: {
                    'Authorization': getBasicAuth(),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uniEngineerId: engineerId
                })
            });
            console.log(response)
        } catch (e) {
            return Promise.reject(e);
        }
    }

    static async findEngineerById(engineerId: string): Promise<EngineerModel> {
        console.log(typeof window)
        console.log('endpoint:', `${ApiEndpoints.FIND_ENGINEER_BY_ID}?engineerId=${engineerId}`);
        try {
            const response = await fetch(`${ApiEndpoints.FIND_ENGINEER_BY_ID}?engineerId=${engineerId}`, {
                headers: {
                    'Authorization': getBasicAuth(),
                    'Content-Type': 'application/json',
                },
            })
            console.log('response', response);
            if (!response.ok) {
                throw 'Bad Response!!!!'
            }

            return await response.json();
        } catch (e) {
            return Promise.reject(e);
        }
    }
}