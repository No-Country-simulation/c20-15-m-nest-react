import { UserService } from './user.service';
export declare class FindByUserDto {
    email: string;
}
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
        account: {
            id: string;
            userId: string;
            balance: number;
            currency: string;
            createdAt: Date;
            updatedAt: Date;
        };
        paymentMethods: {
            id: string;
            userId: string;
            type: string;
            provider: string;
            accountNumber: string;
            expiryDate: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }[]>;
    findByEmail(email: string): import("@prisma/client").Prisma.Prisma__UserClient<{}, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
