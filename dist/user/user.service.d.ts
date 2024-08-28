import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findByEmail(email: string): import("@prisma/client").Prisma.Prisma__UserClient<{}, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        account: {
            id: string;
            userId: string;
            balance: number;
            currency: string;
            createdAt: Date;
            updatedAt: Date;
        };
        id: string;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
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
    findOneByEmailWithPassword(email: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
        role: import("@prisma/client").$Enums.Role;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
