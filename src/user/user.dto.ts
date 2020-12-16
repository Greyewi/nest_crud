import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsInt, IsUUID } from 'class-validator'
import { User } from '../model/user.entity'

export class UserDTO implements Readonly<UserDTO> {
  @IsUUID()
  id: string

  @ApiProperty({ required: true })
  @IsString()
  login: string

  @ApiProperty({ required: true })
  @IsString()
  email: string

  @ApiProperty({ required: true })
  @IsString()
  password: string

  @ApiProperty({ required: true })
  @IsString()
  firstname: string

  @ApiProperty({ required: true })
  @IsString()
  lastname: string

  @ApiProperty({ required: true })
  @IsString()
  middleName: string

  @ApiProperty({ required: true })
  @IsInt()
  status: number

  public static from(dto: Partial<UserDTO>) {
    const it = new UserDTO()
    it.id = dto.id
    it.login = dto.login
    it.email = dto.email
    it.password = dto.password
    it.firstname = dto.firstname
    it.lastname = dto.lastname
    it.middleName = dto.middleName
    it.status = dto.status
    return it
  }

  public static fromEntity(entity: User) {
    return this.from({
      id: entity.id,
      login: entity.login,
      email: entity.email,
      password: entity.password,
      firstname: entity.firstname,
      lastname: entity.lastname,
      middleName: entity.middleName,
      status: entity.status,
    })
  }

  public static toEntity(dto: Partial<UserDTO>) {
    const it = new User()
    it.id = dto.id
    it.login = dto.login
    it.email = dto.email
    it.password = dto.password
    it.firstname = dto.firstname
    it.lastname = dto.lastname
    it.middleName = dto.middleName
    it.status = dto.status
    it.createdBy = dto.id
    it.lastChangedBy = dto.id
    return it
  }
}
