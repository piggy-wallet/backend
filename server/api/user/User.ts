import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

export type UserRole = 'admin' | 'business' | 'user';

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({type: "varchar", length: 100, })
    email!: string

    @Column({type: "varchar", length: 100 })
    password!: string

    @Column({type: "varchar", length: 50 })
    username!: string

    @Column({type: "varchar", length: 50 })
    firstName!: string

    @Column({type: "varchar", length: 50 })
    lastName!: string

    @Column({type: "varchar", length: 30 })
    dni!: string

    @Column({type: "varchar", length: 100 })
    wallet!: string

    @Column("double")
    balance!: number

    @Column({type: "enum", enum: ['admin', 'business', 'user'], default: 'user'} )
    role!: UserRole

    @CreateDateColumn()
    createdDate!: Date

    @UpdateDateColumn()
    updatedDate!: Date 
}