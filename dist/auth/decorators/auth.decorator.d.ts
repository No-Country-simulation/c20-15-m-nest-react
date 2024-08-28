import { Role } from '../enums/role.enum';
export declare function Auth(role: Role): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
