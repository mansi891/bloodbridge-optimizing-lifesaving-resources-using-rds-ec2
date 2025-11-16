import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('requests')
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hospital_name: string;

  @Column()
  blood_group: string;

  @Column()
  units_needed: number;

  @CreateDateColumn()
  created_at: Date;
}
