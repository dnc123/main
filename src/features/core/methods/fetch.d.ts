import { ObjectWithRandomProps } from '../../../types';
export declare function get(endpoint: string, payload?: ObjectWithRandomProps): Promise<any>;
export declare function post(endpoint: string, payload?: ObjectWithRandomProps): Promise<any>;
export declare function remove(endpoint: string, payload?: ObjectWithRandomProps): Promise<any>;
export declare function put(): Promise<void>;
