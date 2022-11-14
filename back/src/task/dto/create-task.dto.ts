import { IsString, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly creator: string;

  @IsBoolean()
  readonly status: boolean;
}
