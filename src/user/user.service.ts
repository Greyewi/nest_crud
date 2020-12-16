import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../model/user.entity'
import { Repository } from 'typeorm'
import { UserDTO } from './user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  public async getAll(): Promise<UserDTO[]> {
    return await this.repo
      .find()
      .then((users) => users.map((e) => UserDTO.fromEntity(e)))
  }

  public async create(dto: UserDTO): Promise<UserDTO> {
    return this.repo
      .save(UserDTO.toEntity(dto))
      .then((e) => UserDTO.fromEntity(e))
  }
}
