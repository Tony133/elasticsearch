import { ClientOptions } from '@elastic/elasticsearch';
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

/**
 * @publicApi
 */
export type ElasticsearchModuleOptions = ClientOptions;

/**
 * @publicApi
 */
export interface ElasticsearchOptionsFactory {
  createElasticsearchOptions():
    | Promise<ElasticsearchModuleOptions>
    | ElasticsearchModuleOptions;
}

/**
 * @publicApi
 */
export interface ElasticsearchModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  /**
   * The `useExisting` syntax allows you to create aliases for existing providers.
   */
  useExisting?: Type<ElasticsearchOptionsFactory>;
  /**
   * The `useClass` syntax allows you to dynamically determine a class that a token should resolve to.
   */
  useClass?: Type<ElasticsearchOptionsFactory>;
  /**
   * The `useFactory` syntax allows for creating providers dynamically.
   */
  useFactory?: (
    ...args: any[]
  ) => Promise<ElasticsearchModuleOptions> | ElasticsearchModuleOptions;
  /**
   * Optional list of providers to be injected into the context of the Factory function.
   */
  inject?: any[];
}
