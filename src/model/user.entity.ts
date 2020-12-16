// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from './base.entity'

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 300, unique: true })
  login: string

  @Column({ type: 'varchar', length: 400, unique: true })
  email: string

  @Column({ select: false })
  password: string

  @Column({ type: 'varchar', length: 300 })
  firstname: string

  @Column({ type: 'varchar', length: 300 })
  lastname: string

  @Column({ type: 'varchar', length: 300 })
  middleName: string

  @Column({ type: 'int' })
  status: number
}
