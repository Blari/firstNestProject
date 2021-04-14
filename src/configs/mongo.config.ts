import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(СonfigService),
    ..getMongoOptions()
  }
};

const getMongoString = () => 'mongodb://' +
  configService.get('MONGO_LOGIN') +

