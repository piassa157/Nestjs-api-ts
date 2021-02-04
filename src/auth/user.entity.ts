/* eslint-disable prettier/prettier */
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as crypto from 'crypto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: '' })
  avatar: string;

  @Column()
  email: string;

  @BeforeInsert()
  hashpassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  @Column()
  password: string;
}
