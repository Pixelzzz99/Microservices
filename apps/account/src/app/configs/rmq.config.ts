import { ConfigModule, ConfigService } from '@nestjs/config';
import { IRMQServiceAsyncOptions } from 'nestjs-rmq';

export const getRMQConfig = (): IRMQServiceAsyncOptions => ({
  inject: [ConfigService],
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    exchangeName: configService.get('ARMQ_EXCHANGE') ?? '',
    connections: [
      {
        login: configService.get('ARMQ_USER') ?? '',
        password: configService.get('ARMQ_PASSWORD') ?? '',
        host: configService.get('ARMQ_HOST') ?? '',
      },
    ],
    queueName: configService.get('ARMQ_QUEUE'),
    prefetchCount: 32,
    serviceName: 'purple-service',
  }),
});
