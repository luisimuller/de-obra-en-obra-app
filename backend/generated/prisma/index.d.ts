
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Publicacion
 * 
 */
export type Publicacion = $Result.DefaultSelection<Prisma.$PublicacionPayload>
/**
 * Model PublicacionFoto
 * 
 */
export type PublicacionFoto = $Result.DefaultSelection<Prisma.$PublicacionFotoPayload>
/**
 * Model BusquedaGuardada
 * 
 */
export type BusquedaGuardada = $Result.DefaultSelection<Prisma.$BusquedaGuardadaPayload>
/**
 * Model Alerta
 * 
 */
export type Alerta = $Result.DefaultSelection<Prisma.$AlertaPayload>
/**
 * Model Conversacion
 * 
 */
export type Conversacion = $Result.DefaultSelection<Prisma.$ConversacionPayload>
/**
 * Model Mensaje
 * 
 */
export type Mensaje = $Result.DefaultSelection<Prisma.$MensajePayload>
/**
 * Model Reporte
 * 
 */
export type Reporte = $Result.DefaultSelection<Prisma.$ReportePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicacion`: Exposes CRUD operations for the **Publicacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publicacions
    * const publicacions = await prisma.publicacion.findMany()
    * ```
    */
  get publicacion(): Prisma.PublicacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicacionFoto`: Exposes CRUD operations for the **PublicacionFoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicacionFotos
    * const publicacionFotos = await prisma.publicacionFoto.findMany()
    * ```
    */
  get publicacionFoto(): Prisma.PublicacionFotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.busquedaGuardada`: Exposes CRUD operations for the **BusquedaGuardada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusquedaGuardadas
    * const busquedaGuardadas = await prisma.busquedaGuardada.findMany()
    * ```
    */
  get busquedaGuardada(): Prisma.BusquedaGuardadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alerta`: Exposes CRUD operations for the **Alerta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alertas
    * const alertas = await prisma.alerta.findMany()
    * ```
    */
  get alerta(): Prisma.AlertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversacion`: Exposes CRUD operations for the **Conversacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversacions
    * const conversacions = await prisma.conversacion.findMany()
    * ```
    */
  get conversacion(): Prisma.ConversacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensaje`: Exposes CRUD operations for the **Mensaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensajes
    * const mensajes = await prisma.mensaje.findMany()
    * ```
    */
  get mensaje(): Prisma.MensajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reporte`: Exposes CRUD operations for the **Reporte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reportes
    * const reportes = await prisma.reporte.findMany()
    * ```
    */
  get reporte(): Prisma.ReporteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Categoria: 'Categoria',
    Publicacion: 'Publicacion',
    PublicacionFoto: 'PublicacionFoto',
    BusquedaGuardada: 'BusquedaGuardada',
    Alerta: 'Alerta',
    Conversacion: 'Conversacion',
    Mensaje: 'Mensaje',
    Reporte: 'Reporte'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "categoria" | "publicacion" | "publicacionFoto" | "busquedaGuardada" | "alerta" | "conversacion" | "mensaje" | "reporte"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Publicacion: {
        payload: Prisma.$PublicacionPayload<ExtArgs>
        fields: Prisma.PublicacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>
          }
          findFirst: {
            args: Prisma.PublicacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>
          }
          findMany: {
            args: Prisma.PublicacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>[]
          }
          create: {
            args: Prisma.PublicacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>
          }
          createMany: {
            args: Prisma.PublicacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>[]
          }
          delete: {
            args: Prisma.PublicacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>
          }
          update: {
            args: Prisma.PublicacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>
          }
          deleteMany: {
            args: Prisma.PublicacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>[]
          }
          upsert: {
            args: Prisma.PublicacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>
          }
          aggregate: {
            args: Prisma.PublicacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicacion>
          }
          groupBy: {
            args: Prisma.PublicacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicacionCountArgs<ExtArgs>
            result: $Utils.Optional<PublicacionCountAggregateOutputType> | number
          }
        }
      }
      PublicacionFoto: {
        payload: Prisma.$PublicacionFotoPayload<ExtArgs>
        fields: Prisma.PublicacionFotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicacionFotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionFotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicacionFotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionFotoPayload>
          }
          findFirst: {
            args: Prisma.PublicacionFotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionFotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicacionFotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionFotoPayload>
          }
          findMany: {
            args: Prisma.PublicacionFotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionFotoPayload>[]
          }
          create: {
            args: Prisma.PublicacionFotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionFotoPayload>
          }
          createMany: {
            args: Prisma.PublicacionFotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicacionFotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionFotoPayload>[]
          }
          delete: {
            args: Prisma.PublicacionFotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionFotoPayload>
          }
          update: {
            args: Prisma.PublicacionFotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionFotoPayload>
          }
          deleteMany: {
            args: Prisma.PublicacionFotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicacionFotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicacionFotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionFotoPayload>[]
          }
          upsert: {
            args: Prisma.PublicacionFotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionFotoPayload>
          }
          aggregate: {
            args: Prisma.PublicacionFotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicacionFoto>
          }
          groupBy: {
            args: Prisma.PublicacionFotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicacionFotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicacionFotoCountArgs<ExtArgs>
            result: $Utils.Optional<PublicacionFotoCountAggregateOutputType> | number
          }
        }
      }
      BusquedaGuardada: {
        payload: Prisma.$BusquedaGuardadaPayload<ExtArgs>
        fields: Prisma.BusquedaGuardadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusquedaGuardadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusquedaGuardadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>
          }
          findFirst: {
            args: Prisma.BusquedaGuardadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusquedaGuardadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>
          }
          findMany: {
            args: Prisma.BusquedaGuardadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>[]
          }
          create: {
            args: Prisma.BusquedaGuardadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>
          }
          createMany: {
            args: Prisma.BusquedaGuardadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusquedaGuardadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>[]
          }
          delete: {
            args: Prisma.BusquedaGuardadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>
          }
          update: {
            args: Prisma.BusquedaGuardadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>
          }
          deleteMany: {
            args: Prisma.BusquedaGuardadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusquedaGuardadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusquedaGuardadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>[]
          }
          upsert: {
            args: Prisma.BusquedaGuardadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>
          }
          aggregate: {
            args: Prisma.BusquedaGuardadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusquedaGuardada>
          }
          groupBy: {
            args: Prisma.BusquedaGuardadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusquedaGuardadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusquedaGuardadaCountArgs<ExtArgs>
            result: $Utils.Optional<BusquedaGuardadaCountAggregateOutputType> | number
          }
        }
      }
      Alerta: {
        payload: Prisma.$AlertaPayload<ExtArgs>
        fields: Prisma.AlertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          findFirst: {
            args: Prisma.AlertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          findMany: {
            args: Prisma.AlertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>[]
          }
          create: {
            args: Prisma.AlertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          createMany: {
            args: Prisma.AlertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>[]
          }
          delete: {
            args: Prisma.AlertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          update: {
            args: Prisma.AlertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          deleteMany: {
            args: Prisma.AlertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>[]
          }
          upsert: {
            args: Prisma.AlertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          aggregate: {
            args: Prisma.AlertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlerta>
          }
          groupBy: {
            args: Prisma.AlertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertaCountArgs<ExtArgs>
            result: $Utils.Optional<AlertaCountAggregateOutputType> | number
          }
        }
      }
      Conversacion: {
        payload: Prisma.$ConversacionPayload<ExtArgs>
        fields: Prisma.ConversacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          findFirst: {
            args: Prisma.ConversacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          findMany: {
            args: Prisma.ConversacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>[]
          }
          create: {
            args: Prisma.ConversacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          createMany: {
            args: Prisma.ConversacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>[]
          }
          delete: {
            args: Prisma.ConversacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          update: {
            args: Prisma.ConversacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          deleteMany: {
            args: Prisma.ConversacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>[]
          }
          upsert: {
            args: Prisma.ConversacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          aggregate: {
            args: Prisma.ConversacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversacion>
          }
          groupBy: {
            args: Prisma.ConversacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversacionCountArgs<ExtArgs>
            result: $Utils.Optional<ConversacionCountAggregateOutputType> | number
          }
        }
      }
      Mensaje: {
        payload: Prisma.$MensajePayload<ExtArgs>
        fields: Prisma.MensajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findFirst: {
            args: Prisma.MensajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findMany: {
            args: Prisma.MensajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          create: {
            args: Prisma.MensajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          createMany: {
            args: Prisma.MensajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          delete: {
            args: Prisma.MensajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          update: {
            args: Prisma.MensajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          deleteMany: {
            args: Prisma.MensajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          upsert: {
            args: Prisma.MensajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          aggregate: {
            args: Prisma.MensajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensaje>
          }
          groupBy: {
            args: Prisma.MensajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensajeCountArgs<ExtArgs>
            result: $Utils.Optional<MensajeCountAggregateOutputType> | number
          }
        }
      }
      Reporte: {
        payload: Prisma.$ReportePayload<ExtArgs>
        fields: Prisma.ReporteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReporteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReporteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          findFirst: {
            args: Prisma.ReporteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReporteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          findMany: {
            args: Prisma.ReporteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>[]
          }
          create: {
            args: Prisma.ReporteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          createMany: {
            args: Prisma.ReporteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReporteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>[]
          }
          delete: {
            args: Prisma.ReporteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          update: {
            args: Prisma.ReporteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          deleteMany: {
            args: Prisma.ReporteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReporteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReporteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>[]
          }
          upsert: {
            args: Prisma.ReporteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          aggregate: {
            args: Prisma.ReporteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReporte>
          }
          groupBy: {
            args: Prisma.ReporteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReporteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReporteCountArgs<ExtArgs>
            result: $Utils.Optional<ReporteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    categoria?: CategoriaOmit
    publicacion?: PublicacionOmit
    publicacionFoto?: PublicacionFotoOmit
    busquedaGuardada?: BusquedaGuardadaOmit
    alerta?: AlertaOmit
    conversacion?: ConversacionOmit
    mensaje?: MensajeOmit
    reporte?: ReporteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    publicaciones: number
    busquedasGuardadas: number
    conversacionesComoComprador: number
    conversacionesComoVendedor: number
    mensajes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicaciones?: boolean | UsuarioCountOutputTypeCountPublicacionesArgs
    busquedasGuardadas?: boolean | UsuarioCountOutputTypeCountBusquedasGuardadasArgs
    conversacionesComoComprador?: boolean | UsuarioCountOutputTypeCountConversacionesComoCompradorArgs
    conversacionesComoVendedor?: boolean | UsuarioCountOutputTypeCountConversacionesComoVendedorArgs
    mensajes?: boolean | UsuarioCountOutputTypeCountMensajesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPublicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountBusquedasGuardadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusquedaGuardadaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountConversacionesComoCompradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountConversacionesComoVendedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    subcategorias: number
    publicaciones: number
    busquedasGuardadas: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategorias?: boolean | CategoriaCountOutputTypeCountSubcategoriasArgs
    publicaciones?: boolean | CategoriaCountOutputTypeCountPublicacionesArgs
    busquedasGuardadas?: boolean | CategoriaCountOutputTypeCountBusquedasGuardadasArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountSubcategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountPublicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountBusquedasGuardadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusquedaGuardadaWhereInput
  }


  /**
   * Count Type PublicacionCountOutputType
   */

  export type PublicacionCountOutputType = {
    fotos: number
    alertas: number
    conversaciones: number
    reportes: number
  }

  export type PublicacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotos?: boolean | PublicacionCountOutputTypeCountFotosArgs
    alertas?: boolean | PublicacionCountOutputTypeCountAlertasArgs
    conversaciones?: boolean | PublicacionCountOutputTypeCountConversacionesArgs
    reportes?: boolean | PublicacionCountOutputTypeCountReportesArgs
  }

  // Custom InputTypes
  /**
   * PublicacionCountOutputType without action
   */
  export type PublicacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionCountOutputType
     */
    select?: PublicacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicacionCountOutputType without action
   */
  export type PublicacionCountOutputTypeCountFotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionFotoWhereInput
  }

  /**
   * PublicacionCountOutputType without action
   */
  export type PublicacionCountOutputTypeCountAlertasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaWhereInput
  }

  /**
   * PublicacionCountOutputType without action
   */
  export type PublicacionCountOutputTypeCountConversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionWhereInput
  }

  /**
   * PublicacionCountOutputType without action
   */
  export type PublicacionCountOutputTypeCountReportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReporteWhereInput
  }


  /**
   * Count Type BusquedaGuardadaCountOutputType
   */

  export type BusquedaGuardadaCountOutputType = {
    alertas: number
  }

  export type BusquedaGuardadaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alertas?: boolean | BusquedaGuardadaCountOutputTypeCountAlertasArgs
  }

  // Custom InputTypes
  /**
   * BusquedaGuardadaCountOutputType without action
   */
  export type BusquedaGuardadaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardadaCountOutputType
     */
    select?: BusquedaGuardadaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusquedaGuardadaCountOutputType without action
   */
  export type BusquedaGuardadaCountOutputTypeCountAlertasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaWhereInput
  }


  /**
   * Count Type ConversacionCountOutputType
   */

  export type ConversacionCountOutputType = {
    mensajes: number
  }

  export type ConversacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensajes?: boolean | ConversacionCountOutputTypeCountMensajesArgs
  }

  // Custom InputTypes
  /**
   * ConversacionCountOutputType without action
   */
  export type ConversacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionCountOutputType
     */
    select?: ConversacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversacionCountOutputType without action
   */
  export type ConversacionCountOutputTypeCountMensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    passwordHash: string | null
    telefono: string | null
    rol: string | null
    creadoEn: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    passwordHash: string | null
    telefono: string | null
    rol: string | null
    creadoEn: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    passwordHash: number
    telefono: number
    rol: number
    creadoEn: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    passwordHash?: true
    telefono?: true
    rol?: true
    creadoEn?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    passwordHash?: true
    telefono?: true
    rol?: true
    creadoEn?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    passwordHash?: true
    telefono?: true
    rol?: true
    creadoEn?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    correo: string
    passwordHash: string
    telefono: string | null
    rol: string
    creadoEn: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    passwordHash?: boolean
    telefono?: boolean
    rol?: boolean
    creadoEn?: boolean
    publicaciones?: boolean | Usuario$publicacionesArgs<ExtArgs>
    busquedasGuardadas?: boolean | Usuario$busquedasGuardadasArgs<ExtArgs>
    conversacionesComoComprador?: boolean | Usuario$conversacionesComoCompradorArgs<ExtArgs>
    conversacionesComoVendedor?: boolean | Usuario$conversacionesComoVendedorArgs<ExtArgs>
    mensajes?: boolean | Usuario$mensajesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    passwordHash?: boolean
    telefono?: boolean
    rol?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    passwordHash?: boolean
    telefono?: boolean
    rol?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    passwordHash?: boolean
    telefono?: boolean
    rol?: boolean
    creadoEn?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "correo" | "passwordHash" | "telefono" | "rol" | "creadoEn", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicaciones?: boolean | Usuario$publicacionesArgs<ExtArgs>
    busquedasGuardadas?: boolean | Usuario$busquedasGuardadasArgs<ExtArgs>
    conversacionesComoComprador?: boolean | Usuario$conversacionesComoCompradorArgs<ExtArgs>
    conversacionesComoVendedor?: boolean | Usuario$conversacionesComoVendedorArgs<ExtArgs>
    mensajes?: boolean | Usuario$mensajesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      publicaciones: Prisma.$PublicacionPayload<ExtArgs>[]
      busquedasGuardadas: Prisma.$BusquedaGuardadaPayload<ExtArgs>[]
      conversacionesComoComprador: Prisma.$ConversacionPayload<ExtArgs>[]
      conversacionesComoVendedor: Prisma.$ConversacionPayload<ExtArgs>[]
      mensajes: Prisma.$MensajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      correo: string
      passwordHash: string
      telefono: string | null
      rol: string
      creadoEn: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicaciones<T extends Usuario$publicacionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$publicacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    busquedasGuardadas<T extends Usuario$busquedasGuardadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$busquedasGuardadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversacionesComoComprador<T extends Usuario$conversacionesComoCompradorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$conversacionesComoCompradorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversacionesComoVendedor<T extends Usuario$conversacionesComoVendedorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$conversacionesComoVendedorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensajes<T extends Usuario$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly passwordHash: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'String'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.publicaciones
   */
  export type Usuario$publicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    where?: PublicacionWhereInput
    orderBy?: PublicacionOrderByWithRelationInput | PublicacionOrderByWithRelationInput[]
    cursor?: PublicacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicacionScalarFieldEnum | PublicacionScalarFieldEnum[]
  }

  /**
   * Usuario.busquedasGuardadas
   */
  export type Usuario$busquedasGuardadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    where?: BusquedaGuardadaWhereInput
    orderBy?: BusquedaGuardadaOrderByWithRelationInput | BusquedaGuardadaOrderByWithRelationInput[]
    cursor?: BusquedaGuardadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusquedaGuardadaScalarFieldEnum | BusquedaGuardadaScalarFieldEnum[]
  }

  /**
   * Usuario.conversacionesComoComprador
   */
  export type Usuario$conversacionesComoCompradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    where?: ConversacionWhereInput
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    cursor?: ConversacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Usuario.conversacionesComoVendedor
   */
  export type Usuario$conversacionesComoVendedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    where?: ConversacionWhereInput
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    cursor?: ConversacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Usuario.mensajes
   */
  export type Usuario$mensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    cursor?: MensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
    categoriaPadreId: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
    categoriaPadreId: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    categoriaPadreId: number | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    categoriaPadreId: number | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    categoriaPadreId: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
    categoriaPadreId?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
    categoriaPadreId?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
    categoriaPadreId?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    categoriaPadreId?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    categoriaPadreId?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    categoriaPadreId: number | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    categoriaPadreId?: boolean
    categoriaPadre?: boolean | Categoria$categoriaPadreArgs<ExtArgs>
    subcategorias?: boolean | Categoria$subcategoriasArgs<ExtArgs>
    publicaciones?: boolean | Categoria$publicacionesArgs<ExtArgs>
    busquedasGuardadas?: boolean | Categoria$busquedasGuardadasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    categoriaPadreId?: boolean
    categoriaPadre?: boolean | Categoria$categoriaPadreArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    categoriaPadreId?: boolean
    categoriaPadre?: boolean | Categoria$categoriaPadreArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    categoriaPadreId?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "categoriaPadreId", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoriaPadre?: boolean | Categoria$categoriaPadreArgs<ExtArgs>
    subcategorias?: boolean | Categoria$subcategoriasArgs<ExtArgs>
    publicaciones?: boolean | Categoria$publicacionesArgs<ExtArgs>
    busquedasGuardadas?: boolean | Categoria$busquedasGuardadasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoriaPadre?: boolean | Categoria$categoriaPadreArgs<ExtArgs>
  }
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoriaPadre?: boolean | Categoria$categoriaPadreArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      categoriaPadre: Prisma.$CategoriaPayload<ExtArgs> | null
      subcategorias: Prisma.$CategoriaPayload<ExtArgs>[]
      publicaciones: Prisma.$PublicacionPayload<ExtArgs>[]
      busquedasGuardadas: Prisma.$BusquedaGuardadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      categoriaPadreId: number | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoriaPadre<T extends Categoria$categoriaPadreArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$categoriaPadreArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subcategorias<T extends Categoria$subcategoriasArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$subcategoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publicaciones<T extends Categoria$publicacionesArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$publicacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    busquedasGuardadas<T extends Categoria$busquedasGuardadasArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$busquedasGuardadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
    readonly categoriaPadreId: FieldRef<"Categoria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.categoriaPadre
   */
  export type Categoria$categoriaPadreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
  }

  /**
   * Categoria.subcategorias
   */
  export type Categoria$subcategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    cursor?: CategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria.publicaciones
   */
  export type Categoria$publicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    where?: PublicacionWhereInput
    orderBy?: PublicacionOrderByWithRelationInput | PublicacionOrderByWithRelationInput[]
    cursor?: PublicacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicacionScalarFieldEnum | PublicacionScalarFieldEnum[]
  }

  /**
   * Categoria.busquedasGuardadas
   */
  export type Categoria$busquedasGuardadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    where?: BusquedaGuardadaWhereInput
    orderBy?: BusquedaGuardadaOrderByWithRelationInput | BusquedaGuardadaOrderByWithRelationInput[]
    cursor?: BusquedaGuardadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusquedaGuardadaScalarFieldEnum | BusquedaGuardadaScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Publicacion
   */

  export type AggregatePublicacion = {
    _count: PublicacionCountAggregateOutputType | null
    _avg: PublicacionAvgAggregateOutputType | null
    _sum: PublicacionSumAggregateOutputType | null
    _min: PublicacionMinAggregateOutputType | null
    _max: PublicacionMaxAggregateOutputType | null
  }

  export type PublicacionAvgAggregateOutputType = {
    id: number | null
    vendedorId: number | null
    categoriaId: number | null
    cantidad: number | null
    precio: number | null
    latitud: number | null
    longitud: number | null
  }

  export type PublicacionSumAggregateOutputType = {
    id: number | null
    vendedorId: number | null
    categoriaId: number | null
    cantidad: number | null
    precio: number | null
    latitud: number | null
    longitud: number | null
  }

  export type PublicacionMinAggregateOutputType = {
    id: number | null
    vendedorId: number | null
    categoriaId: number | null
    titulo: string | null
    descripcion: string | null
    cantidad: number | null
    unidad: string | null
    precio: number | null
    latitud: number | null
    longitud: number | null
    estado: string | null
    fechaVencimiento: Date | null
    creadoEn: Date | null
  }

  export type PublicacionMaxAggregateOutputType = {
    id: number | null
    vendedorId: number | null
    categoriaId: number | null
    titulo: string | null
    descripcion: string | null
    cantidad: number | null
    unidad: string | null
    precio: number | null
    latitud: number | null
    longitud: number | null
    estado: string | null
    fechaVencimiento: Date | null
    creadoEn: Date | null
  }

  export type PublicacionCountAggregateOutputType = {
    id: number
    vendedorId: number
    categoriaId: number
    titulo: number
    descripcion: number
    cantidad: number
    unidad: number
    precio: number
    latitud: number
    longitud: number
    estado: number
    fechaVencimiento: number
    creadoEn: number
    _all: number
  }


  export type PublicacionAvgAggregateInputType = {
    id?: true
    vendedorId?: true
    categoriaId?: true
    cantidad?: true
    precio?: true
    latitud?: true
    longitud?: true
  }

  export type PublicacionSumAggregateInputType = {
    id?: true
    vendedorId?: true
    categoriaId?: true
    cantidad?: true
    precio?: true
    latitud?: true
    longitud?: true
  }

  export type PublicacionMinAggregateInputType = {
    id?: true
    vendedorId?: true
    categoriaId?: true
    titulo?: true
    descripcion?: true
    cantidad?: true
    unidad?: true
    precio?: true
    latitud?: true
    longitud?: true
    estado?: true
    fechaVencimiento?: true
    creadoEn?: true
  }

  export type PublicacionMaxAggregateInputType = {
    id?: true
    vendedorId?: true
    categoriaId?: true
    titulo?: true
    descripcion?: true
    cantidad?: true
    unidad?: true
    precio?: true
    latitud?: true
    longitud?: true
    estado?: true
    fechaVencimiento?: true
    creadoEn?: true
  }

  export type PublicacionCountAggregateInputType = {
    id?: true
    vendedorId?: true
    categoriaId?: true
    titulo?: true
    descripcion?: true
    cantidad?: true
    unidad?: true
    precio?: true
    latitud?: true
    longitud?: true
    estado?: true
    fechaVencimiento?: true
    creadoEn?: true
    _all?: true
  }

  export type PublicacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicacion to aggregate.
     */
    where?: PublicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacions to fetch.
     */
    orderBy?: PublicacionOrderByWithRelationInput | PublicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publicacions
    **/
    _count?: true | PublicacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicacionMaxAggregateInputType
  }

  export type GetPublicacionAggregateType<T extends PublicacionAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicacion[P]>
      : GetScalarType<T[P], AggregatePublicacion[P]>
  }




  export type PublicacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionWhereInput
    orderBy?: PublicacionOrderByWithAggregationInput | PublicacionOrderByWithAggregationInput[]
    by: PublicacionScalarFieldEnum[] | PublicacionScalarFieldEnum
    having?: PublicacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicacionCountAggregateInputType | true
    _avg?: PublicacionAvgAggregateInputType
    _sum?: PublicacionSumAggregateInputType
    _min?: PublicacionMinAggregateInputType
    _max?: PublicacionMaxAggregateInputType
  }

  export type PublicacionGroupByOutputType = {
    id: number
    vendedorId: number
    categoriaId: number
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado: string
    fechaVencimiento: Date
    creadoEn: Date
    _count: PublicacionCountAggregateOutputType | null
    _avg: PublicacionAvgAggregateOutputType | null
    _sum: PublicacionSumAggregateOutputType | null
    _min: PublicacionMinAggregateOutputType | null
    _max: PublicacionMaxAggregateOutputType | null
  }

  type GetPublicacionGroupByPayload<T extends PublicacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicacionGroupByOutputType[P]>
            : GetScalarType<T[P], PublicacionGroupByOutputType[P]>
        }
      >
    >


  export type PublicacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendedorId?: boolean
    categoriaId?: boolean
    titulo?: boolean
    descripcion?: boolean
    cantidad?: boolean
    unidad?: boolean
    precio?: boolean
    latitud?: boolean
    longitud?: boolean
    estado?: boolean
    fechaVencimiento?: boolean
    creadoEn?: boolean
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    fotos?: boolean | Publicacion$fotosArgs<ExtArgs>
    alertas?: boolean | Publicacion$alertasArgs<ExtArgs>
    conversaciones?: boolean | Publicacion$conversacionesArgs<ExtArgs>
    reportes?: boolean | Publicacion$reportesArgs<ExtArgs>
    _count?: boolean | PublicacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacion"]>

  export type PublicacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendedorId?: boolean
    categoriaId?: boolean
    titulo?: boolean
    descripcion?: boolean
    cantidad?: boolean
    unidad?: boolean
    precio?: boolean
    latitud?: boolean
    longitud?: boolean
    estado?: boolean
    fechaVencimiento?: boolean
    creadoEn?: boolean
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacion"]>

  export type PublicacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendedorId?: boolean
    categoriaId?: boolean
    titulo?: boolean
    descripcion?: boolean
    cantidad?: boolean
    unidad?: boolean
    precio?: boolean
    latitud?: boolean
    longitud?: boolean
    estado?: boolean
    fechaVencimiento?: boolean
    creadoEn?: boolean
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacion"]>

  export type PublicacionSelectScalar = {
    id?: boolean
    vendedorId?: boolean
    categoriaId?: boolean
    titulo?: boolean
    descripcion?: boolean
    cantidad?: boolean
    unidad?: boolean
    precio?: boolean
    latitud?: boolean
    longitud?: boolean
    estado?: boolean
    fechaVencimiento?: boolean
    creadoEn?: boolean
  }

  export type PublicacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendedorId" | "categoriaId" | "titulo" | "descripcion" | "cantidad" | "unidad" | "precio" | "latitud" | "longitud" | "estado" | "fechaVencimiento" | "creadoEn", ExtArgs["result"]["publicacion"]>
  export type PublicacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    fotos?: boolean | Publicacion$fotosArgs<ExtArgs>
    alertas?: boolean | Publicacion$alertasArgs<ExtArgs>
    conversaciones?: boolean | Publicacion$conversacionesArgs<ExtArgs>
    reportes?: boolean | Publicacion$reportesArgs<ExtArgs>
    _count?: boolean | PublicacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublicacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type PublicacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $PublicacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publicacion"
    objects: {
      vendedor: Prisma.$UsuarioPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      fotos: Prisma.$PublicacionFotoPayload<ExtArgs>[]
      alertas: Prisma.$AlertaPayload<ExtArgs>[]
      conversaciones: Prisma.$ConversacionPayload<ExtArgs>[]
      reportes: Prisma.$ReportePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vendedorId: number
      categoriaId: number
      titulo: string
      descripcion: string
      cantidad: number
      unidad: string
      precio: number
      latitud: number
      longitud: number
      estado: string
      fechaVencimiento: Date
      creadoEn: Date
    }, ExtArgs["result"]["publicacion"]>
    composites: {}
  }

  type PublicacionGetPayload<S extends boolean | null | undefined | PublicacionDefaultArgs> = $Result.GetResult<Prisma.$PublicacionPayload, S>

  type PublicacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicacionCountAggregateInputType | true
    }

  export interface PublicacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publicacion'], meta: { name: 'Publicacion' } }
    /**
     * Find zero or one Publicacion that matches the filter.
     * @param {PublicacionFindUniqueArgs} args - Arguments to find a Publicacion
     * @example
     * // Get one Publicacion
     * const publicacion = await prisma.publicacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicacionFindUniqueArgs>(args: SelectSubset<T, PublicacionFindUniqueArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publicacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicacionFindUniqueOrThrowArgs} args - Arguments to find a Publicacion
     * @example
     * // Get one Publicacion
     * const publicacion = await prisma.publicacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicacionFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFindFirstArgs} args - Arguments to find a Publicacion
     * @example
     * // Get one Publicacion
     * const publicacion = await prisma.publicacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicacionFindFirstArgs>(args?: SelectSubset<T, PublicacionFindFirstArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFindFirstOrThrowArgs} args - Arguments to find a Publicacion
     * @example
     * // Get one Publicacion
     * const publicacion = await prisma.publicacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicacionFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publicacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publicacions
     * const publicacions = await prisma.publicacion.findMany()
     * 
     * // Get first 10 Publicacions
     * const publicacions = await prisma.publicacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicacionWithIdOnly = await prisma.publicacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicacionFindManyArgs>(args?: SelectSubset<T, PublicacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publicacion.
     * @param {PublicacionCreateArgs} args - Arguments to create a Publicacion.
     * @example
     * // Create one Publicacion
     * const Publicacion = await prisma.publicacion.create({
     *   data: {
     *     // ... data to create a Publicacion
     *   }
     * })
     * 
     */
    create<T extends PublicacionCreateArgs>(args: SelectSubset<T, PublicacionCreateArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publicacions.
     * @param {PublicacionCreateManyArgs} args - Arguments to create many Publicacions.
     * @example
     * // Create many Publicacions
     * const publicacion = await prisma.publicacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicacionCreateManyArgs>(args?: SelectSubset<T, PublicacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publicacions and returns the data saved in the database.
     * @param {PublicacionCreateManyAndReturnArgs} args - Arguments to create many Publicacions.
     * @example
     * // Create many Publicacions
     * const publicacion = await prisma.publicacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publicacions and only return the `id`
     * const publicacionWithIdOnly = await prisma.publicacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicacionCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publicacion.
     * @param {PublicacionDeleteArgs} args - Arguments to delete one Publicacion.
     * @example
     * // Delete one Publicacion
     * const Publicacion = await prisma.publicacion.delete({
     *   where: {
     *     // ... filter to delete one Publicacion
     *   }
     * })
     * 
     */
    delete<T extends PublicacionDeleteArgs>(args: SelectSubset<T, PublicacionDeleteArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publicacion.
     * @param {PublicacionUpdateArgs} args - Arguments to update one Publicacion.
     * @example
     * // Update one Publicacion
     * const publicacion = await prisma.publicacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicacionUpdateArgs>(args: SelectSubset<T, PublicacionUpdateArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publicacions.
     * @param {PublicacionDeleteManyArgs} args - Arguments to filter Publicacions to delete.
     * @example
     * // Delete a few Publicacions
     * const { count } = await prisma.publicacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicacionDeleteManyArgs>(args?: SelectSubset<T, PublicacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publicacions
     * const publicacion = await prisma.publicacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicacionUpdateManyArgs>(args: SelectSubset<T, PublicacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicacions and returns the data updated in the database.
     * @param {PublicacionUpdateManyAndReturnArgs} args - Arguments to update many Publicacions.
     * @example
     * // Update many Publicacions
     * const publicacion = await prisma.publicacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publicacions and only return the `id`
     * const publicacionWithIdOnly = await prisma.publicacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicacionUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publicacion.
     * @param {PublicacionUpsertArgs} args - Arguments to update or create a Publicacion.
     * @example
     * // Update or create a Publicacion
     * const publicacion = await prisma.publicacion.upsert({
     *   create: {
     *     // ... data to create a Publicacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publicacion we want to update
     *   }
     * })
     */
    upsert<T extends PublicacionUpsertArgs>(args: SelectSubset<T, PublicacionUpsertArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionCountArgs} args - Arguments to filter Publicacions to count.
     * @example
     * // Count the number of Publicacions
     * const count = await prisma.publicacion.count({
     *   where: {
     *     // ... the filter for the Publicacions we want to count
     *   }
     * })
    **/
    count<T extends PublicacionCountArgs>(
      args?: Subset<T, PublicacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicacionAggregateArgs>(args: Subset<T, PublicacionAggregateArgs>): Prisma.PrismaPromise<GetPublicacionAggregateType<T>>

    /**
     * Group by Publicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicacionGroupByArgs['orderBy'] }
        : { orderBy?: PublicacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publicacion model
   */
  readonly fields: PublicacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publicacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendedor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fotos<T extends Publicacion$fotosArgs<ExtArgs> = {}>(args?: Subset<T, Publicacion$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionFotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alertas<T extends Publicacion$alertasArgs<ExtArgs> = {}>(args?: Subset<T, Publicacion$alertasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversaciones<T extends Publicacion$conversacionesArgs<ExtArgs> = {}>(args?: Subset<T, Publicacion$conversacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportes<T extends Publicacion$reportesArgs<ExtArgs> = {}>(args?: Subset<T, Publicacion$reportesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Publicacion model
   */
  interface PublicacionFieldRefs {
    readonly id: FieldRef<"Publicacion", 'Int'>
    readonly vendedorId: FieldRef<"Publicacion", 'Int'>
    readonly categoriaId: FieldRef<"Publicacion", 'Int'>
    readonly titulo: FieldRef<"Publicacion", 'String'>
    readonly descripcion: FieldRef<"Publicacion", 'String'>
    readonly cantidad: FieldRef<"Publicacion", 'Float'>
    readonly unidad: FieldRef<"Publicacion", 'String'>
    readonly precio: FieldRef<"Publicacion", 'Float'>
    readonly latitud: FieldRef<"Publicacion", 'Float'>
    readonly longitud: FieldRef<"Publicacion", 'Float'>
    readonly estado: FieldRef<"Publicacion", 'String'>
    readonly fechaVencimiento: FieldRef<"Publicacion", 'DateTime'>
    readonly creadoEn: FieldRef<"Publicacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Publicacion findUnique
   */
  export type PublicacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * Filter, which Publicacion to fetch.
     */
    where: PublicacionWhereUniqueInput
  }

  /**
   * Publicacion findUniqueOrThrow
   */
  export type PublicacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * Filter, which Publicacion to fetch.
     */
    where: PublicacionWhereUniqueInput
  }

  /**
   * Publicacion findFirst
   */
  export type PublicacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * Filter, which Publicacion to fetch.
     */
    where?: PublicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacions to fetch.
     */
    orderBy?: PublicacionOrderByWithRelationInput | PublicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicacions.
     */
    cursor?: PublicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicacions.
     */
    distinct?: PublicacionScalarFieldEnum | PublicacionScalarFieldEnum[]
  }

  /**
   * Publicacion findFirstOrThrow
   */
  export type PublicacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * Filter, which Publicacion to fetch.
     */
    where?: PublicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacions to fetch.
     */
    orderBy?: PublicacionOrderByWithRelationInput | PublicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicacions.
     */
    cursor?: PublicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicacions.
     */
    distinct?: PublicacionScalarFieldEnum | PublicacionScalarFieldEnum[]
  }

  /**
   * Publicacion findMany
   */
  export type PublicacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * Filter, which Publicacions to fetch.
     */
    where?: PublicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacions to fetch.
     */
    orderBy?: PublicacionOrderByWithRelationInput | PublicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publicacions.
     */
    cursor?: PublicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicacions.
     */
    distinct?: PublicacionScalarFieldEnum | PublicacionScalarFieldEnum[]
  }

  /**
   * Publicacion create
   */
  export type PublicacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Publicacion.
     */
    data: XOR<PublicacionCreateInput, PublicacionUncheckedCreateInput>
  }

  /**
   * Publicacion createMany
   */
  export type PublicacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publicacions.
     */
    data: PublicacionCreateManyInput | PublicacionCreateManyInput[]
  }

  /**
   * Publicacion createManyAndReturn
   */
  export type PublicacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * The data used to create many Publicacions.
     */
    data: PublicacionCreateManyInput | PublicacionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publicacion update
   */
  export type PublicacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Publicacion.
     */
    data: XOR<PublicacionUpdateInput, PublicacionUncheckedUpdateInput>
    /**
     * Choose, which Publicacion to update.
     */
    where: PublicacionWhereUniqueInput
  }

  /**
   * Publicacion updateMany
   */
  export type PublicacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publicacions.
     */
    data: XOR<PublicacionUpdateManyMutationInput, PublicacionUncheckedUpdateManyInput>
    /**
     * Filter which Publicacions to update
     */
    where?: PublicacionWhereInput
    /**
     * Limit how many Publicacions to update.
     */
    limit?: number
  }

  /**
   * Publicacion updateManyAndReturn
   */
  export type PublicacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * The data used to update Publicacions.
     */
    data: XOR<PublicacionUpdateManyMutationInput, PublicacionUncheckedUpdateManyInput>
    /**
     * Filter which Publicacions to update
     */
    where?: PublicacionWhereInput
    /**
     * Limit how many Publicacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publicacion upsert
   */
  export type PublicacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Publicacion to update in case it exists.
     */
    where: PublicacionWhereUniqueInput
    /**
     * In case the Publicacion found by the `where` argument doesn't exist, create a new Publicacion with this data.
     */
    create: XOR<PublicacionCreateInput, PublicacionUncheckedCreateInput>
    /**
     * In case the Publicacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicacionUpdateInput, PublicacionUncheckedUpdateInput>
  }

  /**
   * Publicacion delete
   */
  export type PublicacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * Filter which Publicacion to delete.
     */
    where: PublicacionWhereUniqueInput
  }

  /**
   * Publicacion deleteMany
   */
  export type PublicacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicacions to delete
     */
    where?: PublicacionWhereInput
    /**
     * Limit how many Publicacions to delete.
     */
    limit?: number
  }

  /**
   * Publicacion.fotos
   */
  export type Publicacion$fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoInclude<ExtArgs> | null
    where?: PublicacionFotoWhereInput
    orderBy?: PublicacionFotoOrderByWithRelationInput | PublicacionFotoOrderByWithRelationInput[]
    cursor?: PublicacionFotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicacionFotoScalarFieldEnum | PublicacionFotoScalarFieldEnum[]
  }

  /**
   * Publicacion.alertas
   */
  export type Publicacion$alertasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    where?: AlertaWhereInput
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    cursor?: AlertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Publicacion.conversaciones
   */
  export type Publicacion$conversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    where?: ConversacionWhereInput
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    cursor?: ConversacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Publicacion.reportes
   */
  export type Publicacion$reportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    where?: ReporteWhereInput
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    cursor?: ReporteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Publicacion without action
   */
  export type PublicacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
  }


  /**
   * Model PublicacionFoto
   */

  export type AggregatePublicacionFoto = {
    _count: PublicacionFotoCountAggregateOutputType | null
    _avg: PublicacionFotoAvgAggregateOutputType | null
    _sum: PublicacionFotoSumAggregateOutputType | null
    _min: PublicacionFotoMinAggregateOutputType | null
    _max: PublicacionFotoMaxAggregateOutputType | null
  }

  export type PublicacionFotoAvgAggregateOutputType = {
    id: number | null
    publicacionId: number | null
    orden: number | null
  }

  export type PublicacionFotoSumAggregateOutputType = {
    id: number | null
    publicacionId: number | null
    orden: number | null
  }

  export type PublicacionFotoMinAggregateOutputType = {
    id: number | null
    publicacionId: number | null
    url: string | null
    orden: number | null
  }

  export type PublicacionFotoMaxAggregateOutputType = {
    id: number | null
    publicacionId: number | null
    url: string | null
    orden: number | null
  }

  export type PublicacionFotoCountAggregateOutputType = {
    id: number
    publicacionId: number
    url: number
    orden: number
    _all: number
  }


  export type PublicacionFotoAvgAggregateInputType = {
    id?: true
    publicacionId?: true
    orden?: true
  }

  export type PublicacionFotoSumAggregateInputType = {
    id?: true
    publicacionId?: true
    orden?: true
  }

  export type PublicacionFotoMinAggregateInputType = {
    id?: true
    publicacionId?: true
    url?: true
    orden?: true
  }

  export type PublicacionFotoMaxAggregateInputType = {
    id?: true
    publicacionId?: true
    url?: true
    orden?: true
  }

  export type PublicacionFotoCountAggregateInputType = {
    id?: true
    publicacionId?: true
    url?: true
    orden?: true
    _all?: true
  }

  export type PublicacionFotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicacionFoto to aggregate.
     */
    where?: PublicacionFotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicacionFotos to fetch.
     */
    orderBy?: PublicacionFotoOrderByWithRelationInput | PublicacionFotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicacionFotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicacionFotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicacionFotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicacionFotos
    **/
    _count?: true | PublicacionFotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicacionFotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicacionFotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicacionFotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicacionFotoMaxAggregateInputType
  }

  export type GetPublicacionFotoAggregateType<T extends PublicacionFotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicacionFoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicacionFoto[P]>
      : GetScalarType<T[P], AggregatePublicacionFoto[P]>
  }




  export type PublicacionFotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionFotoWhereInput
    orderBy?: PublicacionFotoOrderByWithAggregationInput | PublicacionFotoOrderByWithAggregationInput[]
    by: PublicacionFotoScalarFieldEnum[] | PublicacionFotoScalarFieldEnum
    having?: PublicacionFotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicacionFotoCountAggregateInputType | true
    _avg?: PublicacionFotoAvgAggregateInputType
    _sum?: PublicacionFotoSumAggregateInputType
    _min?: PublicacionFotoMinAggregateInputType
    _max?: PublicacionFotoMaxAggregateInputType
  }

  export type PublicacionFotoGroupByOutputType = {
    id: number
    publicacionId: number
    url: string
    orden: number
    _count: PublicacionFotoCountAggregateOutputType | null
    _avg: PublicacionFotoAvgAggregateOutputType | null
    _sum: PublicacionFotoSumAggregateOutputType | null
    _min: PublicacionFotoMinAggregateOutputType | null
    _max: PublicacionFotoMaxAggregateOutputType | null
  }

  type GetPublicacionFotoGroupByPayload<T extends PublicacionFotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicacionFotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicacionFotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicacionFotoGroupByOutputType[P]>
            : GetScalarType<T[P], PublicacionFotoGroupByOutputType[P]>
        }
      >
    >


  export type PublicacionFotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicacionId?: boolean
    url?: boolean
    orden?: boolean
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacionFoto"]>

  export type PublicacionFotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicacionId?: boolean
    url?: boolean
    orden?: boolean
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacionFoto"]>

  export type PublicacionFotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicacionId?: boolean
    url?: boolean
    orden?: boolean
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacionFoto"]>

  export type PublicacionFotoSelectScalar = {
    id?: boolean
    publicacionId?: boolean
    url?: boolean
    orden?: boolean
  }

  export type PublicacionFotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicacionId" | "url" | "orden", ExtArgs["result"]["publicacionFoto"]>
  export type PublicacionFotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }
  export type PublicacionFotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }
  export type PublicacionFotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }

  export type $PublicacionFotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicacionFoto"
    objects: {
      publicacion: Prisma.$PublicacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      publicacionId: number
      url: string
      orden: number
    }, ExtArgs["result"]["publicacionFoto"]>
    composites: {}
  }

  type PublicacionFotoGetPayload<S extends boolean | null | undefined | PublicacionFotoDefaultArgs> = $Result.GetResult<Prisma.$PublicacionFotoPayload, S>

  type PublicacionFotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicacionFotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicacionFotoCountAggregateInputType | true
    }

  export interface PublicacionFotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicacionFoto'], meta: { name: 'PublicacionFoto' } }
    /**
     * Find zero or one PublicacionFoto that matches the filter.
     * @param {PublicacionFotoFindUniqueArgs} args - Arguments to find a PublicacionFoto
     * @example
     * // Get one PublicacionFoto
     * const publicacionFoto = await prisma.publicacionFoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicacionFotoFindUniqueArgs>(args: SelectSubset<T, PublicacionFotoFindUniqueArgs<ExtArgs>>): Prisma__PublicacionFotoClient<$Result.GetResult<Prisma.$PublicacionFotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicacionFoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicacionFotoFindUniqueOrThrowArgs} args - Arguments to find a PublicacionFoto
     * @example
     * // Get one PublicacionFoto
     * const publicacionFoto = await prisma.publicacionFoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicacionFotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicacionFotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicacionFotoClient<$Result.GetResult<Prisma.$PublicacionFotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicacionFoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFotoFindFirstArgs} args - Arguments to find a PublicacionFoto
     * @example
     * // Get one PublicacionFoto
     * const publicacionFoto = await prisma.publicacionFoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicacionFotoFindFirstArgs>(args?: SelectSubset<T, PublicacionFotoFindFirstArgs<ExtArgs>>): Prisma__PublicacionFotoClient<$Result.GetResult<Prisma.$PublicacionFotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicacionFoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFotoFindFirstOrThrowArgs} args - Arguments to find a PublicacionFoto
     * @example
     * // Get one PublicacionFoto
     * const publicacionFoto = await prisma.publicacionFoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicacionFotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicacionFotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicacionFotoClient<$Result.GetResult<Prisma.$PublicacionFotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicacionFotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicacionFotos
     * const publicacionFotos = await prisma.publicacionFoto.findMany()
     * 
     * // Get first 10 PublicacionFotos
     * const publicacionFotos = await prisma.publicacionFoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicacionFotoWithIdOnly = await prisma.publicacionFoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicacionFotoFindManyArgs>(args?: SelectSubset<T, PublicacionFotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionFotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicacionFoto.
     * @param {PublicacionFotoCreateArgs} args - Arguments to create a PublicacionFoto.
     * @example
     * // Create one PublicacionFoto
     * const PublicacionFoto = await prisma.publicacionFoto.create({
     *   data: {
     *     // ... data to create a PublicacionFoto
     *   }
     * })
     * 
     */
    create<T extends PublicacionFotoCreateArgs>(args: SelectSubset<T, PublicacionFotoCreateArgs<ExtArgs>>): Prisma__PublicacionFotoClient<$Result.GetResult<Prisma.$PublicacionFotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicacionFotos.
     * @param {PublicacionFotoCreateManyArgs} args - Arguments to create many PublicacionFotos.
     * @example
     * // Create many PublicacionFotos
     * const publicacionFoto = await prisma.publicacionFoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicacionFotoCreateManyArgs>(args?: SelectSubset<T, PublicacionFotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicacionFotos and returns the data saved in the database.
     * @param {PublicacionFotoCreateManyAndReturnArgs} args - Arguments to create many PublicacionFotos.
     * @example
     * // Create many PublicacionFotos
     * const publicacionFoto = await prisma.publicacionFoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicacionFotos and only return the `id`
     * const publicacionFotoWithIdOnly = await prisma.publicacionFoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicacionFotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicacionFotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionFotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicacionFoto.
     * @param {PublicacionFotoDeleteArgs} args - Arguments to delete one PublicacionFoto.
     * @example
     * // Delete one PublicacionFoto
     * const PublicacionFoto = await prisma.publicacionFoto.delete({
     *   where: {
     *     // ... filter to delete one PublicacionFoto
     *   }
     * })
     * 
     */
    delete<T extends PublicacionFotoDeleteArgs>(args: SelectSubset<T, PublicacionFotoDeleteArgs<ExtArgs>>): Prisma__PublicacionFotoClient<$Result.GetResult<Prisma.$PublicacionFotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicacionFoto.
     * @param {PublicacionFotoUpdateArgs} args - Arguments to update one PublicacionFoto.
     * @example
     * // Update one PublicacionFoto
     * const publicacionFoto = await prisma.publicacionFoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicacionFotoUpdateArgs>(args: SelectSubset<T, PublicacionFotoUpdateArgs<ExtArgs>>): Prisma__PublicacionFotoClient<$Result.GetResult<Prisma.$PublicacionFotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicacionFotos.
     * @param {PublicacionFotoDeleteManyArgs} args - Arguments to filter PublicacionFotos to delete.
     * @example
     * // Delete a few PublicacionFotos
     * const { count } = await prisma.publicacionFoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicacionFotoDeleteManyArgs>(args?: SelectSubset<T, PublicacionFotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicacionFotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicacionFotos
     * const publicacionFoto = await prisma.publicacionFoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicacionFotoUpdateManyArgs>(args: SelectSubset<T, PublicacionFotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicacionFotos and returns the data updated in the database.
     * @param {PublicacionFotoUpdateManyAndReturnArgs} args - Arguments to update many PublicacionFotos.
     * @example
     * // Update many PublicacionFotos
     * const publicacionFoto = await prisma.publicacionFoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicacionFotos and only return the `id`
     * const publicacionFotoWithIdOnly = await prisma.publicacionFoto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicacionFotoUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicacionFotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionFotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicacionFoto.
     * @param {PublicacionFotoUpsertArgs} args - Arguments to update or create a PublicacionFoto.
     * @example
     * // Update or create a PublicacionFoto
     * const publicacionFoto = await prisma.publicacionFoto.upsert({
     *   create: {
     *     // ... data to create a PublicacionFoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicacionFoto we want to update
     *   }
     * })
     */
    upsert<T extends PublicacionFotoUpsertArgs>(args: SelectSubset<T, PublicacionFotoUpsertArgs<ExtArgs>>): Prisma__PublicacionFotoClient<$Result.GetResult<Prisma.$PublicacionFotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicacionFotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFotoCountArgs} args - Arguments to filter PublicacionFotos to count.
     * @example
     * // Count the number of PublicacionFotos
     * const count = await prisma.publicacionFoto.count({
     *   where: {
     *     // ... the filter for the PublicacionFotos we want to count
     *   }
     * })
    **/
    count<T extends PublicacionFotoCountArgs>(
      args?: Subset<T, PublicacionFotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicacionFotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicacionFoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicacionFotoAggregateArgs>(args: Subset<T, PublicacionFotoAggregateArgs>): Prisma.PrismaPromise<GetPublicacionFotoAggregateType<T>>

    /**
     * Group by PublicacionFoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicacionFotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicacionFotoGroupByArgs['orderBy'] }
        : { orderBy?: PublicacionFotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicacionFotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicacionFotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicacionFoto model
   */
  readonly fields: PublicacionFotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicacionFoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicacionFotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicacion<T extends PublicacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicacionDefaultArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PublicacionFoto model
   */
  interface PublicacionFotoFieldRefs {
    readonly id: FieldRef<"PublicacionFoto", 'Int'>
    readonly publicacionId: FieldRef<"PublicacionFoto", 'Int'>
    readonly url: FieldRef<"PublicacionFoto", 'String'>
    readonly orden: FieldRef<"PublicacionFoto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PublicacionFoto findUnique
   */
  export type PublicacionFotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoInclude<ExtArgs> | null
    /**
     * Filter, which PublicacionFoto to fetch.
     */
    where: PublicacionFotoWhereUniqueInput
  }

  /**
   * PublicacionFoto findUniqueOrThrow
   */
  export type PublicacionFotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoInclude<ExtArgs> | null
    /**
     * Filter, which PublicacionFoto to fetch.
     */
    where: PublicacionFotoWhereUniqueInput
  }

  /**
   * PublicacionFoto findFirst
   */
  export type PublicacionFotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoInclude<ExtArgs> | null
    /**
     * Filter, which PublicacionFoto to fetch.
     */
    where?: PublicacionFotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicacionFotos to fetch.
     */
    orderBy?: PublicacionFotoOrderByWithRelationInput | PublicacionFotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicacionFotos.
     */
    cursor?: PublicacionFotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicacionFotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicacionFotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicacionFotos.
     */
    distinct?: PublicacionFotoScalarFieldEnum | PublicacionFotoScalarFieldEnum[]
  }

  /**
   * PublicacionFoto findFirstOrThrow
   */
  export type PublicacionFotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoInclude<ExtArgs> | null
    /**
     * Filter, which PublicacionFoto to fetch.
     */
    where?: PublicacionFotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicacionFotos to fetch.
     */
    orderBy?: PublicacionFotoOrderByWithRelationInput | PublicacionFotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicacionFotos.
     */
    cursor?: PublicacionFotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicacionFotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicacionFotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicacionFotos.
     */
    distinct?: PublicacionFotoScalarFieldEnum | PublicacionFotoScalarFieldEnum[]
  }

  /**
   * PublicacionFoto findMany
   */
  export type PublicacionFotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoInclude<ExtArgs> | null
    /**
     * Filter, which PublicacionFotos to fetch.
     */
    where?: PublicacionFotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicacionFotos to fetch.
     */
    orderBy?: PublicacionFotoOrderByWithRelationInput | PublicacionFotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicacionFotos.
     */
    cursor?: PublicacionFotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicacionFotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicacionFotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicacionFotos.
     */
    distinct?: PublicacionFotoScalarFieldEnum | PublicacionFotoScalarFieldEnum[]
  }

  /**
   * PublicacionFoto create
   */
  export type PublicacionFotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicacionFoto.
     */
    data: XOR<PublicacionFotoCreateInput, PublicacionFotoUncheckedCreateInput>
  }

  /**
   * PublicacionFoto createMany
   */
  export type PublicacionFotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicacionFotos.
     */
    data: PublicacionFotoCreateManyInput | PublicacionFotoCreateManyInput[]
  }

  /**
   * PublicacionFoto createManyAndReturn
   */
  export type PublicacionFotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * The data used to create many PublicacionFotos.
     */
    data: PublicacionFotoCreateManyInput | PublicacionFotoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicacionFoto update
   */
  export type PublicacionFotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicacionFoto.
     */
    data: XOR<PublicacionFotoUpdateInput, PublicacionFotoUncheckedUpdateInput>
    /**
     * Choose, which PublicacionFoto to update.
     */
    where: PublicacionFotoWhereUniqueInput
  }

  /**
   * PublicacionFoto updateMany
   */
  export type PublicacionFotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicacionFotos.
     */
    data: XOR<PublicacionFotoUpdateManyMutationInput, PublicacionFotoUncheckedUpdateManyInput>
    /**
     * Filter which PublicacionFotos to update
     */
    where?: PublicacionFotoWhereInput
    /**
     * Limit how many PublicacionFotos to update.
     */
    limit?: number
  }

  /**
   * PublicacionFoto updateManyAndReturn
   */
  export type PublicacionFotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * The data used to update PublicacionFotos.
     */
    data: XOR<PublicacionFotoUpdateManyMutationInput, PublicacionFotoUncheckedUpdateManyInput>
    /**
     * Filter which PublicacionFotos to update
     */
    where?: PublicacionFotoWhereInput
    /**
     * Limit how many PublicacionFotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicacionFoto upsert
   */
  export type PublicacionFotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicacionFoto to update in case it exists.
     */
    where: PublicacionFotoWhereUniqueInput
    /**
     * In case the PublicacionFoto found by the `where` argument doesn't exist, create a new PublicacionFoto with this data.
     */
    create: XOR<PublicacionFotoCreateInput, PublicacionFotoUncheckedCreateInput>
    /**
     * In case the PublicacionFoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicacionFotoUpdateInput, PublicacionFotoUncheckedUpdateInput>
  }

  /**
   * PublicacionFoto delete
   */
  export type PublicacionFotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoInclude<ExtArgs> | null
    /**
     * Filter which PublicacionFoto to delete.
     */
    where: PublicacionFotoWhereUniqueInput
  }

  /**
   * PublicacionFoto deleteMany
   */
  export type PublicacionFotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicacionFotos to delete
     */
    where?: PublicacionFotoWhereInput
    /**
     * Limit how many PublicacionFotos to delete.
     */
    limit?: number
  }

  /**
   * PublicacionFoto without action
   */
  export type PublicacionFotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionFoto
     */
    select?: PublicacionFotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicacionFoto
     */
    omit?: PublicacionFotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionFotoInclude<ExtArgs> | null
  }


  /**
   * Model BusquedaGuardada
   */

  export type AggregateBusquedaGuardada = {
    _count: BusquedaGuardadaCountAggregateOutputType | null
    _avg: BusquedaGuardadaAvgAggregateOutputType | null
    _sum: BusquedaGuardadaSumAggregateOutputType | null
    _min: BusquedaGuardadaMinAggregateOutputType | null
    _max: BusquedaGuardadaMaxAggregateOutputType | null
  }

  export type BusquedaGuardadaAvgAggregateOutputType = {
    id: number | null
    compradorId: number | null
    categoriaId: number | null
    latitud: number | null
    longitud: number | null
    radioKm: number | null
    precioMaximo: number | null
  }

  export type BusquedaGuardadaSumAggregateOutputType = {
    id: number | null
    compradorId: number | null
    categoriaId: number | null
    latitud: number | null
    longitud: number | null
    radioKm: number | null
    precioMaximo: number | null
  }

  export type BusquedaGuardadaMinAggregateOutputType = {
    id: number | null
    compradorId: number | null
    categoriaId: number | null
    palabrasClave: string | null
    latitud: number | null
    longitud: number | null
    radioKm: number | null
    precioMaximo: number | null
    activa: boolean | null
    creadoEn: Date | null
  }

  export type BusquedaGuardadaMaxAggregateOutputType = {
    id: number | null
    compradorId: number | null
    categoriaId: number | null
    palabrasClave: string | null
    latitud: number | null
    longitud: number | null
    radioKm: number | null
    precioMaximo: number | null
    activa: boolean | null
    creadoEn: Date | null
  }

  export type BusquedaGuardadaCountAggregateOutputType = {
    id: number
    compradorId: number
    categoriaId: number
    palabrasClave: number
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo: number
    activa: number
    creadoEn: number
    _all: number
  }


  export type BusquedaGuardadaAvgAggregateInputType = {
    id?: true
    compradorId?: true
    categoriaId?: true
    latitud?: true
    longitud?: true
    radioKm?: true
    precioMaximo?: true
  }

  export type BusquedaGuardadaSumAggregateInputType = {
    id?: true
    compradorId?: true
    categoriaId?: true
    latitud?: true
    longitud?: true
    radioKm?: true
    precioMaximo?: true
  }

  export type BusquedaGuardadaMinAggregateInputType = {
    id?: true
    compradorId?: true
    categoriaId?: true
    palabrasClave?: true
    latitud?: true
    longitud?: true
    radioKm?: true
    precioMaximo?: true
    activa?: true
    creadoEn?: true
  }

  export type BusquedaGuardadaMaxAggregateInputType = {
    id?: true
    compradorId?: true
    categoriaId?: true
    palabrasClave?: true
    latitud?: true
    longitud?: true
    radioKm?: true
    precioMaximo?: true
    activa?: true
    creadoEn?: true
  }

  export type BusquedaGuardadaCountAggregateInputType = {
    id?: true
    compradorId?: true
    categoriaId?: true
    palabrasClave?: true
    latitud?: true
    longitud?: true
    radioKm?: true
    precioMaximo?: true
    activa?: true
    creadoEn?: true
    _all?: true
  }

  export type BusquedaGuardadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusquedaGuardada to aggregate.
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusquedaGuardadas to fetch.
     */
    orderBy?: BusquedaGuardadaOrderByWithRelationInput | BusquedaGuardadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusquedaGuardadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusquedaGuardadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusquedaGuardadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusquedaGuardadas
    **/
    _count?: true | BusquedaGuardadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusquedaGuardadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusquedaGuardadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusquedaGuardadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusquedaGuardadaMaxAggregateInputType
  }

  export type GetBusquedaGuardadaAggregateType<T extends BusquedaGuardadaAggregateArgs> = {
        [P in keyof T & keyof AggregateBusquedaGuardada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusquedaGuardada[P]>
      : GetScalarType<T[P], AggregateBusquedaGuardada[P]>
  }




  export type BusquedaGuardadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusquedaGuardadaWhereInput
    orderBy?: BusquedaGuardadaOrderByWithAggregationInput | BusquedaGuardadaOrderByWithAggregationInput[]
    by: BusquedaGuardadaScalarFieldEnum[] | BusquedaGuardadaScalarFieldEnum
    having?: BusquedaGuardadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusquedaGuardadaCountAggregateInputType | true
    _avg?: BusquedaGuardadaAvgAggregateInputType
    _sum?: BusquedaGuardadaSumAggregateInputType
    _min?: BusquedaGuardadaMinAggregateInputType
    _max?: BusquedaGuardadaMaxAggregateInputType
  }

  export type BusquedaGuardadaGroupByOutputType = {
    id: number
    compradorId: number
    categoriaId: number
    palabrasClave: string | null
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo: number | null
    activa: boolean
    creadoEn: Date
    _count: BusquedaGuardadaCountAggregateOutputType | null
    _avg: BusquedaGuardadaAvgAggregateOutputType | null
    _sum: BusquedaGuardadaSumAggregateOutputType | null
    _min: BusquedaGuardadaMinAggregateOutputType | null
    _max: BusquedaGuardadaMaxAggregateOutputType | null
  }

  type GetBusquedaGuardadaGroupByPayload<T extends BusquedaGuardadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusquedaGuardadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusquedaGuardadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusquedaGuardadaGroupByOutputType[P]>
            : GetScalarType<T[P], BusquedaGuardadaGroupByOutputType[P]>
        }
      >
    >


  export type BusquedaGuardadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compradorId?: boolean
    categoriaId?: boolean
    palabrasClave?: boolean
    latitud?: boolean
    longitud?: boolean
    radioKm?: boolean
    precioMaximo?: boolean
    activa?: boolean
    creadoEn?: boolean
    comprador?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    alertas?: boolean | BusquedaGuardada$alertasArgs<ExtArgs>
    _count?: boolean | BusquedaGuardadaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["busquedaGuardada"]>

  export type BusquedaGuardadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compradorId?: boolean
    categoriaId?: boolean
    palabrasClave?: boolean
    latitud?: boolean
    longitud?: boolean
    radioKm?: boolean
    precioMaximo?: boolean
    activa?: boolean
    creadoEn?: boolean
    comprador?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["busquedaGuardada"]>

  export type BusquedaGuardadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compradorId?: boolean
    categoriaId?: boolean
    palabrasClave?: boolean
    latitud?: boolean
    longitud?: boolean
    radioKm?: boolean
    precioMaximo?: boolean
    activa?: boolean
    creadoEn?: boolean
    comprador?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["busquedaGuardada"]>

  export type BusquedaGuardadaSelectScalar = {
    id?: boolean
    compradorId?: boolean
    categoriaId?: boolean
    palabrasClave?: boolean
    latitud?: boolean
    longitud?: boolean
    radioKm?: boolean
    precioMaximo?: boolean
    activa?: boolean
    creadoEn?: boolean
  }

  export type BusquedaGuardadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "compradorId" | "categoriaId" | "palabrasClave" | "latitud" | "longitud" | "radioKm" | "precioMaximo" | "activa" | "creadoEn", ExtArgs["result"]["busquedaGuardada"]>
  export type BusquedaGuardadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comprador?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    alertas?: boolean | BusquedaGuardada$alertasArgs<ExtArgs>
    _count?: boolean | BusquedaGuardadaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusquedaGuardadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comprador?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type BusquedaGuardadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comprador?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $BusquedaGuardadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusquedaGuardada"
    objects: {
      comprador: Prisma.$UsuarioPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      alertas: Prisma.$AlertaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      compradorId: number
      categoriaId: number
      palabrasClave: string | null
      latitud: number
      longitud: number
      radioKm: number
      precioMaximo: number | null
      activa: boolean
      creadoEn: Date
    }, ExtArgs["result"]["busquedaGuardada"]>
    composites: {}
  }

  type BusquedaGuardadaGetPayload<S extends boolean | null | undefined | BusquedaGuardadaDefaultArgs> = $Result.GetResult<Prisma.$BusquedaGuardadaPayload, S>

  type BusquedaGuardadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusquedaGuardadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusquedaGuardadaCountAggregateInputType | true
    }

  export interface BusquedaGuardadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusquedaGuardada'], meta: { name: 'BusquedaGuardada' } }
    /**
     * Find zero or one BusquedaGuardada that matches the filter.
     * @param {BusquedaGuardadaFindUniqueArgs} args - Arguments to find a BusquedaGuardada
     * @example
     * // Get one BusquedaGuardada
     * const busquedaGuardada = await prisma.busquedaGuardada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusquedaGuardadaFindUniqueArgs>(args: SelectSubset<T, BusquedaGuardadaFindUniqueArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusquedaGuardada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusquedaGuardadaFindUniqueOrThrowArgs} args - Arguments to find a BusquedaGuardada
     * @example
     * // Get one BusquedaGuardada
     * const busquedaGuardada = await prisma.busquedaGuardada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusquedaGuardadaFindUniqueOrThrowArgs>(args: SelectSubset<T, BusquedaGuardadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusquedaGuardada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaFindFirstArgs} args - Arguments to find a BusquedaGuardada
     * @example
     * // Get one BusquedaGuardada
     * const busquedaGuardada = await prisma.busquedaGuardada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusquedaGuardadaFindFirstArgs>(args?: SelectSubset<T, BusquedaGuardadaFindFirstArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusquedaGuardada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaFindFirstOrThrowArgs} args - Arguments to find a BusquedaGuardada
     * @example
     * // Get one BusquedaGuardada
     * const busquedaGuardada = await prisma.busquedaGuardada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusquedaGuardadaFindFirstOrThrowArgs>(args?: SelectSubset<T, BusquedaGuardadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusquedaGuardadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusquedaGuardadas
     * const busquedaGuardadas = await prisma.busquedaGuardada.findMany()
     * 
     * // Get first 10 BusquedaGuardadas
     * const busquedaGuardadas = await prisma.busquedaGuardada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busquedaGuardadaWithIdOnly = await prisma.busquedaGuardada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusquedaGuardadaFindManyArgs>(args?: SelectSubset<T, BusquedaGuardadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusquedaGuardada.
     * @param {BusquedaGuardadaCreateArgs} args - Arguments to create a BusquedaGuardada.
     * @example
     * // Create one BusquedaGuardada
     * const BusquedaGuardada = await prisma.busquedaGuardada.create({
     *   data: {
     *     // ... data to create a BusquedaGuardada
     *   }
     * })
     * 
     */
    create<T extends BusquedaGuardadaCreateArgs>(args: SelectSubset<T, BusquedaGuardadaCreateArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusquedaGuardadas.
     * @param {BusquedaGuardadaCreateManyArgs} args - Arguments to create many BusquedaGuardadas.
     * @example
     * // Create many BusquedaGuardadas
     * const busquedaGuardada = await prisma.busquedaGuardada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusquedaGuardadaCreateManyArgs>(args?: SelectSubset<T, BusquedaGuardadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusquedaGuardadas and returns the data saved in the database.
     * @param {BusquedaGuardadaCreateManyAndReturnArgs} args - Arguments to create many BusquedaGuardadas.
     * @example
     * // Create many BusquedaGuardadas
     * const busquedaGuardada = await prisma.busquedaGuardada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusquedaGuardadas and only return the `id`
     * const busquedaGuardadaWithIdOnly = await prisma.busquedaGuardada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusquedaGuardadaCreateManyAndReturnArgs>(args?: SelectSubset<T, BusquedaGuardadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusquedaGuardada.
     * @param {BusquedaGuardadaDeleteArgs} args - Arguments to delete one BusquedaGuardada.
     * @example
     * // Delete one BusquedaGuardada
     * const BusquedaGuardada = await prisma.busquedaGuardada.delete({
     *   where: {
     *     // ... filter to delete one BusquedaGuardada
     *   }
     * })
     * 
     */
    delete<T extends BusquedaGuardadaDeleteArgs>(args: SelectSubset<T, BusquedaGuardadaDeleteArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusquedaGuardada.
     * @param {BusquedaGuardadaUpdateArgs} args - Arguments to update one BusquedaGuardada.
     * @example
     * // Update one BusquedaGuardada
     * const busquedaGuardada = await prisma.busquedaGuardada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusquedaGuardadaUpdateArgs>(args: SelectSubset<T, BusquedaGuardadaUpdateArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusquedaGuardadas.
     * @param {BusquedaGuardadaDeleteManyArgs} args - Arguments to filter BusquedaGuardadas to delete.
     * @example
     * // Delete a few BusquedaGuardadas
     * const { count } = await prisma.busquedaGuardada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusquedaGuardadaDeleteManyArgs>(args?: SelectSubset<T, BusquedaGuardadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusquedaGuardadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusquedaGuardadas
     * const busquedaGuardada = await prisma.busquedaGuardada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusquedaGuardadaUpdateManyArgs>(args: SelectSubset<T, BusquedaGuardadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusquedaGuardadas and returns the data updated in the database.
     * @param {BusquedaGuardadaUpdateManyAndReturnArgs} args - Arguments to update many BusquedaGuardadas.
     * @example
     * // Update many BusquedaGuardadas
     * const busquedaGuardada = await prisma.busquedaGuardada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusquedaGuardadas and only return the `id`
     * const busquedaGuardadaWithIdOnly = await prisma.busquedaGuardada.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusquedaGuardadaUpdateManyAndReturnArgs>(args: SelectSubset<T, BusquedaGuardadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusquedaGuardada.
     * @param {BusquedaGuardadaUpsertArgs} args - Arguments to update or create a BusquedaGuardada.
     * @example
     * // Update or create a BusquedaGuardada
     * const busquedaGuardada = await prisma.busquedaGuardada.upsert({
     *   create: {
     *     // ... data to create a BusquedaGuardada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusquedaGuardada we want to update
     *   }
     * })
     */
    upsert<T extends BusquedaGuardadaUpsertArgs>(args: SelectSubset<T, BusquedaGuardadaUpsertArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusquedaGuardadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaCountArgs} args - Arguments to filter BusquedaGuardadas to count.
     * @example
     * // Count the number of BusquedaGuardadas
     * const count = await prisma.busquedaGuardada.count({
     *   where: {
     *     // ... the filter for the BusquedaGuardadas we want to count
     *   }
     * })
    **/
    count<T extends BusquedaGuardadaCountArgs>(
      args?: Subset<T, BusquedaGuardadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusquedaGuardadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusquedaGuardada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusquedaGuardadaAggregateArgs>(args: Subset<T, BusquedaGuardadaAggregateArgs>): Prisma.PrismaPromise<GetBusquedaGuardadaAggregateType<T>>

    /**
     * Group by BusquedaGuardada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusquedaGuardadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusquedaGuardadaGroupByArgs['orderBy'] }
        : { orderBy?: BusquedaGuardadaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusquedaGuardadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusquedaGuardadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusquedaGuardada model
   */
  readonly fields: BusquedaGuardadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusquedaGuardada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusquedaGuardadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comprador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alertas<T extends BusquedaGuardada$alertasArgs<ExtArgs> = {}>(args?: Subset<T, BusquedaGuardada$alertasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusquedaGuardada model
   */
  interface BusquedaGuardadaFieldRefs {
    readonly id: FieldRef<"BusquedaGuardada", 'Int'>
    readonly compradorId: FieldRef<"BusquedaGuardada", 'Int'>
    readonly categoriaId: FieldRef<"BusquedaGuardada", 'Int'>
    readonly palabrasClave: FieldRef<"BusquedaGuardada", 'String'>
    readonly latitud: FieldRef<"BusquedaGuardada", 'Float'>
    readonly longitud: FieldRef<"BusquedaGuardada", 'Float'>
    readonly radioKm: FieldRef<"BusquedaGuardada", 'Float'>
    readonly precioMaximo: FieldRef<"BusquedaGuardada", 'Float'>
    readonly activa: FieldRef<"BusquedaGuardada", 'Boolean'>
    readonly creadoEn: FieldRef<"BusquedaGuardada", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusquedaGuardada findUnique
   */
  export type BusquedaGuardadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * Filter, which BusquedaGuardada to fetch.
     */
    where: BusquedaGuardadaWhereUniqueInput
  }

  /**
   * BusquedaGuardada findUniqueOrThrow
   */
  export type BusquedaGuardadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * Filter, which BusquedaGuardada to fetch.
     */
    where: BusquedaGuardadaWhereUniqueInput
  }

  /**
   * BusquedaGuardada findFirst
   */
  export type BusquedaGuardadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * Filter, which BusquedaGuardada to fetch.
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusquedaGuardadas to fetch.
     */
    orderBy?: BusquedaGuardadaOrderByWithRelationInput | BusquedaGuardadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusquedaGuardadas.
     */
    cursor?: BusquedaGuardadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusquedaGuardadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusquedaGuardadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusquedaGuardadas.
     */
    distinct?: BusquedaGuardadaScalarFieldEnum | BusquedaGuardadaScalarFieldEnum[]
  }

  /**
   * BusquedaGuardada findFirstOrThrow
   */
  export type BusquedaGuardadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * Filter, which BusquedaGuardada to fetch.
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusquedaGuardadas to fetch.
     */
    orderBy?: BusquedaGuardadaOrderByWithRelationInput | BusquedaGuardadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusquedaGuardadas.
     */
    cursor?: BusquedaGuardadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusquedaGuardadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusquedaGuardadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusquedaGuardadas.
     */
    distinct?: BusquedaGuardadaScalarFieldEnum | BusquedaGuardadaScalarFieldEnum[]
  }

  /**
   * BusquedaGuardada findMany
   */
  export type BusquedaGuardadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * Filter, which BusquedaGuardadas to fetch.
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusquedaGuardadas to fetch.
     */
    orderBy?: BusquedaGuardadaOrderByWithRelationInput | BusquedaGuardadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusquedaGuardadas.
     */
    cursor?: BusquedaGuardadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusquedaGuardadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusquedaGuardadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusquedaGuardadas.
     */
    distinct?: BusquedaGuardadaScalarFieldEnum | BusquedaGuardadaScalarFieldEnum[]
  }

  /**
   * BusquedaGuardada create
   */
  export type BusquedaGuardadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * The data needed to create a BusquedaGuardada.
     */
    data: XOR<BusquedaGuardadaCreateInput, BusquedaGuardadaUncheckedCreateInput>
  }

  /**
   * BusquedaGuardada createMany
   */
  export type BusquedaGuardadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusquedaGuardadas.
     */
    data: BusquedaGuardadaCreateManyInput | BusquedaGuardadaCreateManyInput[]
  }

  /**
   * BusquedaGuardada createManyAndReturn
   */
  export type BusquedaGuardadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * The data used to create many BusquedaGuardadas.
     */
    data: BusquedaGuardadaCreateManyInput | BusquedaGuardadaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusquedaGuardada update
   */
  export type BusquedaGuardadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * The data needed to update a BusquedaGuardada.
     */
    data: XOR<BusquedaGuardadaUpdateInput, BusquedaGuardadaUncheckedUpdateInput>
    /**
     * Choose, which BusquedaGuardada to update.
     */
    where: BusquedaGuardadaWhereUniqueInput
  }

  /**
   * BusquedaGuardada updateMany
   */
  export type BusquedaGuardadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusquedaGuardadas.
     */
    data: XOR<BusquedaGuardadaUpdateManyMutationInput, BusquedaGuardadaUncheckedUpdateManyInput>
    /**
     * Filter which BusquedaGuardadas to update
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * Limit how many BusquedaGuardadas to update.
     */
    limit?: number
  }

  /**
   * BusquedaGuardada updateManyAndReturn
   */
  export type BusquedaGuardadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * The data used to update BusquedaGuardadas.
     */
    data: XOR<BusquedaGuardadaUpdateManyMutationInput, BusquedaGuardadaUncheckedUpdateManyInput>
    /**
     * Filter which BusquedaGuardadas to update
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * Limit how many BusquedaGuardadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusquedaGuardada upsert
   */
  export type BusquedaGuardadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * The filter to search for the BusquedaGuardada to update in case it exists.
     */
    where: BusquedaGuardadaWhereUniqueInput
    /**
     * In case the BusquedaGuardada found by the `where` argument doesn't exist, create a new BusquedaGuardada with this data.
     */
    create: XOR<BusquedaGuardadaCreateInput, BusquedaGuardadaUncheckedCreateInput>
    /**
     * In case the BusquedaGuardada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusquedaGuardadaUpdateInput, BusquedaGuardadaUncheckedUpdateInput>
  }

  /**
   * BusquedaGuardada delete
   */
  export type BusquedaGuardadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * Filter which BusquedaGuardada to delete.
     */
    where: BusquedaGuardadaWhereUniqueInput
  }

  /**
   * BusquedaGuardada deleteMany
   */
  export type BusquedaGuardadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusquedaGuardadas to delete
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * Limit how many BusquedaGuardadas to delete.
     */
    limit?: number
  }

  /**
   * BusquedaGuardada.alertas
   */
  export type BusquedaGuardada$alertasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    where?: AlertaWhereInput
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    cursor?: AlertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * BusquedaGuardada without action
   */
  export type BusquedaGuardadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
  }


  /**
   * Model Alerta
   */

  export type AggregateAlerta = {
    _count: AlertaCountAggregateOutputType | null
    _avg: AlertaAvgAggregateOutputType | null
    _sum: AlertaSumAggregateOutputType | null
    _min: AlertaMinAggregateOutputType | null
    _max: AlertaMaxAggregateOutputType | null
  }

  export type AlertaAvgAggregateOutputType = {
    id: number | null
    busquedaId: number | null
    publicacionId: number | null
  }

  export type AlertaSumAggregateOutputType = {
    id: number | null
    busquedaId: number | null
    publicacionId: number | null
  }

  export type AlertaMinAggregateOutputType = {
    id: number | null
    busquedaId: number | null
    publicacionId: number | null
    leida: boolean | null
    creadoEn: Date | null
  }

  export type AlertaMaxAggregateOutputType = {
    id: number | null
    busquedaId: number | null
    publicacionId: number | null
    leida: boolean | null
    creadoEn: Date | null
  }

  export type AlertaCountAggregateOutputType = {
    id: number
    busquedaId: number
    publicacionId: number
    leida: number
    creadoEn: number
    _all: number
  }


  export type AlertaAvgAggregateInputType = {
    id?: true
    busquedaId?: true
    publicacionId?: true
  }

  export type AlertaSumAggregateInputType = {
    id?: true
    busquedaId?: true
    publicacionId?: true
  }

  export type AlertaMinAggregateInputType = {
    id?: true
    busquedaId?: true
    publicacionId?: true
    leida?: true
    creadoEn?: true
  }

  export type AlertaMaxAggregateInputType = {
    id?: true
    busquedaId?: true
    publicacionId?: true
    leida?: true
    creadoEn?: true
  }

  export type AlertaCountAggregateInputType = {
    id?: true
    busquedaId?: true
    publicacionId?: true
    leida?: true
    creadoEn?: true
    _all?: true
  }

  export type AlertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerta to aggregate.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alertas
    **/
    _count?: true | AlertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertaMaxAggregateInputType
  }

  export type GetAlertaAggregateType<T extends AlertaAggregateArgs> = {
        [P in keyof T & keyof AggregateAlerta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlerta[P]>
      : GetScalarType<T[P], AggregateAlerta[P]>
  }




  export type AlertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaWhereInput
    orderBy?: AlertaOrderByWithAggregationInput | AlertaOrderByWithAggregationInput[]
    by: AlertaScalarFieldEnum[] | AlertaScalarFieldEnum
    having?: AlertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertaCountAggregateInputType | true
    _avg?: AlertaAvgAggregateInputType
    _sum?: AlertaSumAggregateInputType
    _min?: AlertaMinAggregateInputType
    _max?: AlertaMaxAggregateInputType
  }

  export type AlertaGroupByOutputType = {
    id: number
    busquedaId: number
    publicacionId: number
    leida: boolean
    creadoEn: Date
    _count: AlertaCountAggregateOutputType | null
    _avg: AlertaAvgAggregateOutputType | null
    _sum: AlertaSumAggregateOutputType | null
    _min: AlertaMinAggregateOutputType | null
    _max: AlertaMaxAggregateOutputType | null
  }

  type GetAlertaGroupByPayload<T extends AlertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertaGroupByOutputType[P]>
            : GetScalarType<T[P], AlertaGroupByOutputType[P]>
        }
      >
    >


  export type AlertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busquedaId?: boolean
    publicacionId?: boolean
    leida?: boolean
    creadoEn?: boolean
    busqueda?: boolean | BusquedaGuardadaDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerta"]>

  export type AlertaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busquedaId?: boolean
    publicacionId?: boolean
    leida?: boolean
    creadoEn?: boolean
    busqueda?: boolean | BusquedaGuardadaDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerta"]>

  export type AlertaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busquedaId?: boolean
    publicacionId?: boolean
    leida?: boolean
    creadoEn?: boolean
    busqueda?: boolean | BusquedaGuardadaDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerta"]>

  export type AlertaSelectScalar = {
    id?: boolean
    busquedaId?: boolean
    publicacionId?: boolean
    leida?: boolean
    creadoEn?: boolean
  }

  export type AlertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "busquedaId" | "publicacionId" | "leida" | "creadoEn", ExtArgs["result"]["alerta"]>
  export type AlertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    busqueda?: boolean | BusquedaGuardadaDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }
  export type AlertaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    busqueda?: boolean | BusquedaGuardadaDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }
  export type AlertaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    busqueda?: boolean | BusquedaGuardadaDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }

  export type $AlertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alerta"
    objects: {
      busqueda: Prisma.$BusquedaGuardadaPayload<ExtArgs>
      publicacion: Prisma.$PublicacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      busquedaId: number
      publicacionId: number
      leida: boolean
      creadoEn: Date
    }, ExtArgs["result"]["alerta"]>
    composites: {}
  }

  type AlertaGetPayload<S extends boolean | null | undefined | AlertaDefaultArgs> = $Result.GetResult<Prisma.$AlertaPayload, S>

  type AlertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertaCountAggregateInputType | true
    }

  export interface AlertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alerta'], meta: { name: 'Alerta' } }
    /**
     * Find zero or one Alerta that matches the filter.
     * @param {AlertaFindUniqueArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertaFindUniqueArgs>(args: SelectSubset<T, AlertaFindUniqueArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alerta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertaFindUniqueOrThrowArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertaFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alerta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaFindFirstArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertaFindFirstArgs>(args?: SelectSubset<T, AlertaFindFirstArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alerta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaFindFirstOrThrowArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertaFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alertas
     * const alertas = await prisma.alerta.findMany()
     * 
     * // Get first 10 Alertas
     * const alertas = await prisma.alerta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertaWithIdOnly = await prisma.alerta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertaFindManyArgs>(args?: SelectSubset<T, AlertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alerta.
     * @param {AlertaCreateArgs} args - Arguments to create a Alerta.
     * @example
     * // Create one Alerta
     * const Alerta = await prisma.alerta.create({
     *   data: {
     *     // ... data to create a Alerta
     *   }
     * })
     * 
     */
    create<T extends AlertaCreateArgs>(args: SelectSubset<T, AlertaCreateArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alertas.
     * @param {AlertaCreateManyArgs} args - Arguments to create many Alertas.
     * @example
     * // Create many Alertas
     * const alerta = await prisma.alerta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertaCreateManyArgs>(args?: SelectSubset<T, AlertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alertas and returns the data saved in the database.
     * @param {AlertaCreateManyAndReturnArgs} args - Arguments to create many Alertas.
     * @example
     * // Create many Alertas
     * const alerta = await prisma.alerta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alertas and only return the `id`
     * const alertaWithIdOnly = await prisma.alerta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertaCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alerta.
     * @param {AlertaDeleteArgs} args - Arguments to delete one Alerta.
     * @example
     * // Delete one Alerta
     * const Alerta = await prisma.alerta.delete({
     *   where: {
     *     // ... filter to delete one Alerta
     *   }
     * })
     * 
     */
    delete<T extends AlertaDeleteArgs>(args: SelectSubset<T, AlertaDeleteArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alerta.
     * @param {AlertaUpdateArgs} args - Arguments to update one Alerta.
     * @example
     * // Update one Alerta
     * const alerta = await prisma.alerta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertaUpdateArgs>(args: SelectSubset<T, AlertaUpdateArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alertas.
     * @param {AlertaDeleteManyArgs} args - Arguments to filter Alertas to delete.
     * @example
     * // Delete a few Alertas
     * const { count } = await prisma.alerta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertaDeleteManyArgs>(args?: SelectSubset<T, AlertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alertas
     * const alerta = await prisma.alerta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertaUpdateManyArgs>(args: SelectSubset<T, AlertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alertas and returns the data updated in the database.
     * @param {AlertaUpdateManyAndReturnArgs} args - Arguments to update many Alertas.
     * @example
     * // Update many Alertas
     * const alerta = await prisma.alerta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alertas and only return the `id`
     * const alertaWithIdOnly = await prisma.alerta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertaUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alerta.
     * @param {AlertaUpsertArgs} args - Arguments to update or create a Alerta.
     * @example
     * // Update or create a Alerta
     * const alerta = await prisma.alerta.upsert({
     *   create: {
     *     // ... data to create a Alerta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alerta we want to update
     *   }
     * })
     */
    upsert<T extends AlertaUpsertArgs>(args: SelectSubset<T, AlertaUpsertArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaCountArgs} args - Arguments to filter Alertas to count.
     * @example
     * // Count the number of Alertas
     * const count = await prisma.alerta.count({
     *   where: {
     *     // ... the filter for the Alertas we want to count
     *   }
     * })
    **/
    count<T extends AlertaCountArgs>(
      args?: Subset<T, AlertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertaAggregateArgs>(args: Subset<T, AlertaAggregateArgs>): Prisma.PrismaPromise<GetAlertaAggregateType<T>>

    /**
     * Group by Alerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertaGroupByArgs['orderBy'] }
        : { orderBy?: AlertaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alerta model
   */
  readonly fields: AlertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alerta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    busqueda<T extends BusquedaGuardadaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusquedaGuardadaDefaultArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    publicacion<T extends PublicacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicacionDefaultArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alerta model
   */
  interface AlertaFieldRefs {
    readonly id: FieldRef<"Alerta", 'Int'>
    readonly busquedaId: FieldRef<"Alerta", 'Int'>
    readonly publicacionId: FieldRef<"Alerta", 'Int'>
    readonly leida: FieldRef<"Alerta", 'Boolean'>
    readonly creadoEn: FieldRef<"Alerta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alerta findUnique
   */
  export type AlertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta findUniqueOrThrow
   */
  export type AlertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta findFirst
   */
  export type AlertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alertas.
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alertas.
     */
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta findFirstOrThrow
   */
  export type AlertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alertas.
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alertas.
     */
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta findMany
   */
  export type AlertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alertas to fetch.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alertas.
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alertas.
     */
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta create
   */
  export type AlertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * The data needed to create a Alerta.
     */
    data: XOR<AlertaCreateInput, AlertaUncheckedCreateInput>
  }

  /**
   * Alerta createMany
   */
  export type AlertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alertas.
     */
    data: AlertaCreateManyInput | AlertaCreateManyInput[]
  }

  /**
   * Alerta createManyAndReturn
   */
  export type AlertaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * The data used to create many Alertas.
     */
    data: AlertaCreateManyInput | AlertaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alerta update
   */
  export type AlertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * The data needed to update a Alerta.
     */
    data: XOR<AlertaUpdateInput, AlertaUncheckedUpdateInput>
    /**
     * Choose, which Alerta to update.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta updateMany
   */
  export type AlertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alertas.
     */
    data: XOR<AlertaUpdateManyMutationInput, AlertaUncheckedUpdateManyInput>
    /**
     * Filter which Alertas to update
     */
    where?: AlertaWhereInput
    /**
     * Limit how many Alertas to update.
     */
    limit?: number
  }

  /**
   * Alerta updateManyAndReturn
   */
  export type AlertaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * The data used to update Alertas.
     */
    data: XOR<AlertaUpdateManyMutationInput, AlertaUncheckedUpdateManyInput>
    /**
     * Filter which Alertas to update
     */
    where?: AlertaWhereInput
    /**
     * Limit how many Alertas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alerta upsert
   */
  export type AlertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * The filter to search for the Alerta to update in case it exists.
     */
    where: AlertaWhereUniqueInput
    /**
     * In case the Alerta found by the `where` argument doesn't exist, create a new Alerta with this data.
     */
    create: XOR<AlertaCreateInput, AlertaUncheckedCreateInput>
    /**
     * In case the Alerta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertaUpdateInput, AlertaUncheckedUpdateInput>
  }

  /**
   * Alerta delete
   */
  export type AlertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter which Alerta to delete.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta deleteMany
   */
  export type AlertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alertas to delete
     */
    where?: AlertaWhereInput
    /**
     * Limit how many Alertas to delete.
     */
    limit?: number
  }

  /**
   * Alerta without action
   */
  export type AlertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
  }


  /**
   * Model Conversacion
   */

  export type AggregateConversacion = {
    _count: ConversacionCountAggregateOutputType | null
    _avg: ConversacionAvgAggregateOutputType | null
    _sum: ConversacionSumAggregateOutputType | null
    _min: ConversacionMinAggregateOutputType | null
    _max: ConversacionMaxAggregateOutputType | null
  }

  export type ConversacionAvgAggregateOutputType = {
    id: number | null
    publicacionId: number | null
    compradorId: number | null
    vendedorId: number | null
  }

  export type ConversacionSumAggregateOutputType = {
    id: number | null
    publicacionId: number | null
    compradorId: number | null
    vendedorId: number | null
  }

  export type ConversacionMinAggregateOutputType = {
    id: number | null
    publicacionId: number | null
    compradorId: number | null
    vendedorId: number | null
    telefonoRevelado: boolean | null
    creadoEn: Date | null
  }

  export type ConversacionMaxAggregateOutputType = {
    id: number | null
    publicacionId: number | null
    compradorId: number | null
    vendedorId: number | null
    telefonoRevelado: boolean | null
    creadoEn: Date | null
  }

  export type ConversacionCountAggregateOutputType = {
    id: number
    publicacionId: number
    compradorId: number
    vendedorId: number
    telefonoRevelado: number
    creadoEn: number
    _all: number
  }


  export type ConversacionAvgAggregateInputType = {
    id?: true
    publicacionId?: true
    compradorId?: true
    vendedorId?: true
  }

  export type ConversacionSumAggregateInputType = {
    id?: true
    publicacionId?: true
    compradorId?: true
    vendedorId?: true
  }

  export type ConversacionMinAggregateInputType = {
    id?: true
    publicacionId?: true
    compradorId?: true
    vendedorId?: true
    telefonoRevelado?: true
    creadoEn?: true
  }

  export type ConversacionMaxAggregateInputType = {
    id?: true
    publicacionId?: true
    compradorId?: true
    vendedorId?: true
    telefonoRevelado?: true
    creadoEn?: true
  }

  export type ConversacionCountAggregateInputType = {
    id?: true
    publicacionId?: true
    compradorId?: true
    vendedorId?: true
    telefonoRevelado?: true
    creadoEn?: true
    _all?: true
  }

  export type ConversacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversacion to aggregate.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversacions
    **/
    _count?: true | ConversacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversacionMaxAggregateInputType
  }

  export type GetConversacionAggregateType<T extends ConversacionAggregateArgs> = {
        [P in keyof T & keyof AggregateConversacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversacion[P]>
      : GetScalarType<T[P], AggregateConversacion[P]>
  }




  export type ConversacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionWhereInput
    orderBy?: ConversacionOrderByWithAggregationInput | ConversacionOrderByWithAggregationInput[]
    by: ConversacionScalarFieldEnum[] | ConversacionScalarFieldEnum
    having?: ConversacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversacionCountAggregateInputType | true
    _avg?: ConversacionAvgAggregateInputType
    _sum?: ConversacionSumAggregateInputType
    _min?: ConversacionMinAggregateInputType
    _max?: ConversacionMaxAggregateInputType
  }

  export type ConversacionGroupByOutputType = {
    id: number
    publicacionId: number
    compradorId: number
    vendedorId: number
    telefonoRevelado: boolean
    creadoEn: Date
    _count: ConversacionCountAggregateOutputType | null
    _avg: ConversacionAvgAggregateOutputType | null
    _sum: ConversacionSumAggregateOutputType | null
    _min: ConversacionMinAggregateOutputType | null
    _max: ConversacionMaxAggregateOutputType | null
  }

  type GetConversacionGroupByPayload<T extends ConversacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversacionGroupByOutputType[P]>
            : GetScalarType<T[P], ConversacionGroupByOutputType[P]>
        }
      >
    >


  export type ConversacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicacionId?: boolean
    compradorId?: boolean
    vendedorId?: boolean
    telefonoRevelado?: boolean
    creadoEn?: boolean
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
    comprador?: boolean | UsuarioDefaultArgs<ExtArgs>
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
    mensajes?: boolean | Conversacion$mensajesArgs<ExtArgs>
    _count?: boolean | ConversacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversacion"]>

  export type ConversacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicacionId?: boolean
    compradorId?: boolean
    vendedorId?: boolean
    telefonoRevelado?: boolean
    creadoEn?: boolean
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
    comprador?: boolean | UsuarioDefaultArgs<ExtArgs>
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversacion"]>

  export type ConversacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicacionId?: boolean
    compradorId?: boolean
    vendedorId?: boolean
    telefonoRevelado?: boolean
    creadoEn?: boolean
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
    comprador?: boolean | UsuarioDefaultArgs<ExtArgs>
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversacion"]>

  export type ConversacionSelectScalar = {
    id?: boolean
    publicacionId?: boolean
    compradorId?: boolean
    vendedorId?: boolean
    telefonoRevelado?: boolean
    creadoEn?: boolean
  }

  export type ConversacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicacionId" | "compradorId" | "vendedorId" | "telefonoRevelado" | "creadoEn", ExtArgs["result"]["conversacion"]>
  export type ConversacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
    comprador?: boolean | UsuarioDefaultArgs<ExtArgs>
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
    mensajes?: boolean | Conversacion$mensajesArgs<ExtArgs>
    _count?: boolean | ConversacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
    comprador?: boolean | UsuarioDefaultArgs<ExtArgs>
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ConversacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
    comprador?: boolean | UsuarioDefaultArgs<ExtArgs>
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ConversacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversacion"
    objects: {
      publicacion: Prisma.$PublicacionPayload<ExtArgs>
      comprador: Prisma.$UsuarioPayload<ExtArgs>
      vendedor: Prisma.$UsuarioPayload<ExtArgs>
      mensajes: Prisma.$MensajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      publicacionId: number
      compradorId: number
      vendedorId: number
      telefonoRevelado: boolean
      creadoEn: Date
    }, ExtArgs["result"]["conversacion"]>
    composites: {}
  }

  type ConversacionGetPayload<S extends boolean | null | undefined | ConversacionDefaultArgs> = $Result.GetResult<Prisma.$ConversacionPayload, S>

  type ConversacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversacionCountAggregateInputType | true
    }

  export interface ConversacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversacion'], meta: { name: 'Conversacion' } }
    /**
     * Find zero or one Conversacion that matches the filter.
     * @param {ConversacionFindUniqueArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversacionFindUniqueArgs>(args: SelectSubset<T, ConversacionFindUniqueArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversacionFindUniqueOrThrowArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionFindFirstArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversacionFindFirstArgs>(args?: SelectSubset<T, ConversacionFindFirstArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionFindFirstOrThrowArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversacions
     * const conversacions = await prisma.conversacion.findMany()
     * 
     * // Get first 10 Conversacions
     * const conversacions = await prisma.conversacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversacionWithIdOnly = await prisma.conversacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversacionFindManyArgs>(args?: SelectSubset<T, ConversacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversacion.
     * @param {ConversacionCreateArgs} args - Arguments to create a Conversacion.
     * @example
     * // Create one Conversacion
     * const Conversacion = await prisma.conversacion.create({
     *   data: {
     *     // ... data to create a Conversacion
     *   }
     * })
     * 
     */
    create<T extends ConversacionCreateArgs>(args: SelectSubset<T, ConversacionCreateArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversacions.
     * @param {ConversacionCreateManyArgs} args - Arguments to create many Conversacions.
     * @example
     * // Create many Conversacions
     * const conversacion = await prisma.conversacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversacionCreateManyArgs>(args?: SelectSubset<T, ConversacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversacions and returns the data saved in the database.
     * @param {ConversacionCreateManyAndReturnArgs} args - Arguments to create many Conversacions.
     * @example
     * // Create many Conversacions
     * const conversacion = await prisma.conversacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversacions and only return the `id`
     * const conversacionWithIdOnly = await prisma.conversacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversacionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversacion.
     * @param {ConversacionDeleteArgs} args - Arguments to delete one Conversacion.
     * @example
     * // Delete one Conversacion
     * const Conversacion = await prisma.conversacion.delete({
     *   where: {
     *     // ... filter to delete one Conversacion
     *   }
     * })
     * 
     */
    delete<T extends ConversacionDeleteArgs>(args: SelectSubset<T, ConversacionDeleteArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversacion.
     * @param {ConversacionUpdateArgs} args - Arguments to update one Conversacion.
     * @example
     * // Update one Conversacion
     * const conversacion = await prisma.conversacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversacionUpdateArgs>(args: SelectSubset<T, ConversacionUpdateArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversacions.
     * @param {ConversacionDeleteManyArgs} args - Arguments to filter Conversacions to delete.
     * @example
     * // Delete a few Conversacions
     * const { count } = await prisma.conversacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversacionDeleteManyArgs>(args?: SelectSubset<T, ConversacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversacions
     * const conversacion = await prisma.conversacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversacionUpdateManyArgs>(args: SelectSubset<T, ConversacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversacions and returns the data updated in the database.
     * @param {ConversacionUpdateManyAndReturnArgs} args - Arguments to update many Conversacions.
     * @example
     * // Update many Conversacions
     * const conversacion = await prisma.conversacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversacions and only return the `id`
     * const conversacionWithIdOnly = await prisma.conversacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversacionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversacion.
     * @param {ConversacionUpsertArgs} args - Arguments to update or create a Conversacion.
     * @example
     * // Update or create a Conversacion
     * const conversacion = await prisma.conversacion.upsert({
     *   create: {
     *     // ... data to create a Conversacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversacion we want to update
     *   }
     * })
     */
    upsert<T extends ConversacionUpsertArgs>(args: SelectSubset<T, ConversacionUpsertArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionCountArgs} args - Arguments to filter Conversacions to count.
     * @example
     * // Count the number of Conversacions
     * const count = await prisma.conversacion.count({
     *   where: {
     *     // ... the filter for the Conversacions we want to count
     *   }
     * })
    **/
    count<T extends ConversacionCountArgs>(
      args?: Subset<T, ConversacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversacionAggregateArgs>(args: Subset<T, ConversacionAggregateArgs>): Prisma.PrismaPromise<GetConversacionAggregateType<T>>

    /**
     * Group by Conversacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversacionGroupByArgs['orderBy'] }
        : { orderBy?: ConversacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversacion model
   */
  readonly fields: ConversacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicacion<T extends PublicacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicacionDefaultArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comprador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendedor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mensajes<T extends Conversacion$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, Conversacion$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversacion model
   */
  interface ConversacionFieldRefs {
    readonly id: FieldRef<"Conversacion", 'Int'>
    readonly publicacionId: FieldRef<"Conversacion", 'Int'>
    readonly compradorId: FieldRef<"Conversacion", 'Int'>
    readonly vendedorId: FieldRef<"Conversacion", 'Int'>
    readonly telefonoRevelado: FieldRef<"Conversacion", 'Boolean'>
    readonly creadoEn: FieldRef<"Conversacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversacion findUnique
   */
  export type ConversacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion findUniqueOrThrow
   */
  export type ConversacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion findFirst
   */
  export type ConversacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversacions.
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversacions.
     */
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Conversacion findFirstOrThrow
   */
  export type ConversacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversacions.
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversacions.
     */
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Conversacion findMany
   */
  export type ConversacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacions to fetch.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversacions.
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversacions.
     */
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Conversacion create
   */
  export type ConversacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversacion.
     */
    data: XOR<ConversacionCreateInput, ConversacionUncheckedCreateInput>
  }

  /**
   * Conversacion createMany
   */
  export type ConversacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversacions.
     */
    data: ConversacionCreateManyInput | ConversacionCreateManyInput[]
  }

  /**
   * Conversacion createManyAndReturn
   */
  export type ConversacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * The data used to create many Conversacions.
     */
    data: ConversacionCreateManyInput | ConversacionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversacion update
   */
  export type ConversacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversacion.
     */
    data: XOR<ConversacionUpdateInput, ConversacionUncheckedUpdateInput>
    /**
     * Choose, which Conversacion to update.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion updateMany
   */
  export type ConversacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversacions.
     */
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyInput>
    /**
     * Filter which Conversacions to update
     */
    where?: ConversacionWhereInput
    /**
     * Limit how many Conversacions to update.
     */
    limit?: number
  }

  /**
   * Conversacion updateManyAndReturn
   */
  export type ConversacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * The data used to update Conversacions.
     */
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyInput>
    /**
     * Filter which Conversacions to update
     */
    where?: ConversacionWhereInput
    /**
     * Limit how many Conversacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversacion upsert
   */
  export type ConversacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversacion to update in case it exists.
     */
    where: ConversacionWhereUniqueInput
    /**
     * In case the Conversacion found by the `where` argument doesn't exist, create a new Conversacion with this data.
     */
    create: XOR<ConversacionCreateInput, ConversacionUncheckedCreateInput>
    /**
     * In case the Conversacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversacionUpdateInput, ConversacionUncheckedUpdateInput>
  }

  /**
   * Conversacion delete
   */
  export type ConversacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter which Conversacion to delete.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion deleteMany
   */
  export type ConversacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversacions to delete
     */
    where?: ConversacionWhereInput
    /**
     * Limit how many Conversacions to delete.
     */
    limit?: number
  }

  /**
   * Conversacion.mensajes
   */
  export type Conversacion$mensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    cursor?: MensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Conversacion without action
   */
  export type ConversacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
  }


  /**
   * Model Mensaje
   */

  export type AggregateMensaje = {
    _count: MensajeCountAggregateOutputType | null
    _avg: MensajeAvgAggregateOutputType | null
    _sum: MensajeSumAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  export type MensajeAvgAggregateOutputType = {
    id: number | null
    conversacionId: number | null
    emisorId: number | null
  }

  export type MensajeSumAggregateOutputType = {
    id: number | null
    conversacionId: number | null
    emisorId: number | null
  }

  export type MensajeMinAggregateOutputType = {
    id: number | null
    conversacionId: number | null
    emisorId: number | null
    texto: string | null
    creadoEn: Date | null
  }

  export type MensajeMaxAggregateOutputType = {
    id: number | null
    conversacionId: number | null
    emisorId: number | null
    texto: string | null
    creadoEn: Date | null
  }

  export type MensajeCountAggregateOutputType = {
    id: number
    conversacionId: number
    emisorId: number
    texto: number
    creadoEn: number
    _all: number
  }


  export type MensajeAvgAggregateInputType = {
    id?: true
    conversacionId?: true
    emisorId?: true
  }

  export type MensajeSumAggregateInputType = {
    id?: true
    conversacionId?: true
    emisorId?: true
  }

  export type MensajeMinAggregateInputType = {
    id?: true
    conversacionId?: true
    emisorId?: true
    texto?: true
    creadoEn?: true
  }

  export type MensajeMaxAggregateInputType = {
    id?: true
    conversacionId?: true
    emisorId?: true
    texto?: true
    creadoEn?: true
  }

  export type MensajeCountAggregateInputType = {
    id?: true
    conversacionId?: true
    emisorId?: true
    texto?: true
    creadoEn?: true
    _all?: true
  }

  export type MensajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensaje to aggregate.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensajes
    **/
    _count?: true | MensajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajeMaxAggregateInputType
  }

  export type GetMensajeAggregateType<T extends MensajeAggregateArgs> = {
        [P in keyof T & keyof AggregateMensaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensaje[P]>
      : GetScalarType<T[P], AggregateMensaje[P]>
  }




  export type MensajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithAggregationInput | MensajeOrderByWithAggregationInput[]
    by: MensajeScalarFieldEnum[] | MensajeScalarFieldEnum
    having?: MensajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajeCountAggregateInputType | true
    _avg?: MensajeAvgAggregateInputType
    _sum?: MensajeSumAggregateInputType
    _min?: MensajeMinAggregateInputType
    _max?: MensajeMaxAggregateInputType
  }

  export type MensajeGroupByOutputType = {
    id: number
    conversacionId: number
    emisorId: number
    texto: string
    creadoEn: Date
    _count: MensajeCountAggregateOutputType | null
    _avg: MensajeAvgAggregateOutputType | null
    _sum: MensajeSumAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  type GetMensajeGroupByPayload<T extends MensajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajeGroupByOutputType[P]>
            : GetScalarType<T[P], MensajeGroupByOutputType[P]>
        }
      >
    >


  export type MensajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversacionId?: boolean
    emisorId?: boolean
    texto?: boolean
    creadoEn?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversacionId?: boolean
    emisorId?: boolean
    texto?: boolean
    creadoEn?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversacionId?: boolean
    emisorId?: boolean
    texto?: boolean
    creadoEn?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectScalar = {
    id?: boolean
    conversacionId?: boolean
    emisorId?: boolean
    texto?: boolean
    creadoEn?: boolean
  }

  export type MensajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversacionId" | "emisorId" | "texto" | "creadoEn", ExtArgs["result"]["mensaje"]>
  export type MensajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MensajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MensajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MensajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensaje"
    objects: {
      conversacion: Prisma.$ConversacionPayload<ExtArgs>
      emisor: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conversacionId: number
      emisorId: number
      texto: string
      creadoEn: Date
    }, ExtArgs["result"]["mensaje"]>
    composites: {}
  }

  type MensajeGetPayload<S extends boolean | null | undefined | MensajeDefaultArgs> = $Result.GetResult<Prisma.$MensajePayload, S>

  type MensajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensajeCountAggregateInputType | true
    }

  export interface MensajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensaje'], meta: { name: 'Mensaje' } }
    /**
     * Find zero or one Mensaje that matches the filter.
     * @param {MensajeFindUniqueArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensajeFindUniqueArgs>(args: SelectSubset<T, MensajeFindUniqueArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensajeFindUniqueOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensajeFindUniqueOrThrowArgs>(args: SelectSubset<T, MensajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensajeFindFirstArgs>(args?: SelectSubset<T, MensajeFindFirstArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensajeFindFirstOrThrowArgs>(args?: SelectSubset<T, MensajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensajes
     * const mensajes = await prisma.mensaje.findMany()
     * 
     * // Get first 10 Mensajes
     * const mensajes = await prisma.mensaje.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensajeFindManyArgs>(args?: SelectSubset<T, MensajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensaje.
     * @param {MensajeCreateArgs} args - Arguments to create a Mensaje.
     * @example
     * // Create one Mensaje
     * const Mensaje = await prisma.mensaje.create({
     *   data: {
     *     // ... data to create a Mensaje
     *   }
     * })
     * 
     */
    create<T extends MensajeCreateArgs>(args: SelectSubset<T, MensajeCreateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensajes.
     * @param {MensajeCreateManyArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensajeCreateManyArgs>(args?: SelectSubset<T, MensajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensajes and returns the data saved in the database.
     * @param {MensajeCreateManyAndReturnArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensajeCreateManyAndReturnArgs>(args?: SelectSubset<T, MensajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensaje.
     * @param {MensajeDeleteArgs} args - Arguments to delete one Mensaje.
     * @example
     * // Delete one Mensaje
     * const Mensaje = await prisma.mensaje.delete({
     *   where: {
     *     // ... filter to delete one Mensaje
     *   }
     * })
     * 
     */
    delete<T extends MensajeDeleteArgs>(args: SelectSubset<T, MensajeDeleteArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensaje.
     * @param {MensajeUpdateArgs} args - Arguments to update one Mensaje.
     * @example
     * // Update one Mensaje
     * const mensaje = await prisma.mensaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensajeUpdateArgs>(args: SelectSubset<T, MensajeUpdateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensajes.
     * @param {MensajeDeleteManyArgs} args - Arguments to filter Mensajes to delete.
     * @example
     * // Delete a few Mensajes
     * const { count } = await prisma.mensaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensajeDeleteManyArgs>(args?: SelectSubset<T, MensajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensajeUpdateManyArgs>(args: SelectSubset<T, MensajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes and returns the data updated in the database.
     * @param {MensajeUpdateManyAndReturnArgs} args - Arguments to update many Mensajes.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MensajeUpdateManyAndReturnArgs>(args: SelectSubset<T, MensajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensaje.
     * @param {MensajeUpsertArgs} args - Arguments to update or create a Mensaje.
     * @example
     * // Update or create a Mensaje
     * const mensaje = await prisma.mensaje.upsert({
     *   create: {
     *     // ... data to create a Mensaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensaje we want to update
     *   }
     * })
     */
    upsert<T extends MensajeUpsertArgs>(args: SelectSubset<T, MensajeUpsertArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeCountArgs} args - Arguments to filter Mensajes to count.
     * @example
     * // Count the number of Mensajes
     * const count = await prisma.mensaje.count({
     *   where: {
     *     // ... the filter for the Mensajes we want to count
     *   }
     * })
    **/
    count<T extends MensajeCountArgs>(
      args?: Subset<T, MensajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensajeAggregateArgs>(args: Subset<T, MensajeAggregateArgs>): Prisma.PrismaPromise<GetMensajeAggregateType<T>>

    /**
     * Group by Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensajeGroupByArgs['orderBy'] }
        : { orderBy?: MensajeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensaje model
   */
  readonly fields: MensajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversacion<T extends ConversacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversacionDefaultArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emisor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mensaje model
   */
  interface MensajeFieldRefs {
    readonly id: FieldRef<"Mensaje", 'Int'>
    readonly conversacionId: FieldRef<"Mensaje", 'Int'>
    readonly emisorId: FieldRef<"Mensaje", 'Int'>
    readonly texto: FieldRef<"Mensaje", 'String'>
    readonly creadoEn: FieldRef<"Mensaje", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mensaje findUnique
   */
  export type MensajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findUniqueOrThrow
   */
  export type MensajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findFirst
   */
  export type MensajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findFirstOrThrow
   */
  export type MensajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findMany
   */
  export type MensajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensajes to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje create
   */
  export type MensajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensaje.
     */
    data: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
  }

  /**
   * Mensaje createMany
   */
  export type MensajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
  }

  /**
   * Mensaje createManyAndReturn
   */
  export type MensajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensaje update
   */
  export type MensajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensaje.
     */
    data: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
    /**
     * Choose, which Mensaje to update.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje updateMany
   */
  export type MensajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
  }

  /**
   * Mensaje updateManyAndReturn
   */
  export type MensajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensaje upsert
   */
  export type MensajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensaje to update in case it exists.
     */
    where: MensajeWhereUniqueInput
    /**
     * In case the Mensaje found by the `where` argument doesn't exist, create a new Mensaje with this data.
     */
    create: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
    /**
     * In case the Mensaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
  }

  /**
   * Mensaje delete
   */
  export type MensajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter which Mensaje to delete.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje deleteMany
   */
  export type MensajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensajes to delete
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to delete.
     */
    limit?: number
  }

  /**
   * Mensaje without action
   */
  export type MensajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
  }


  /**
   * Model Reporte
   */

  export type AggregateReporte = {
    _count: ReporteCountAggregateOutputType | null
    _avg: ReporteAvgAggregateOutputType | null
    _sum: ReporteSumAggregateOutputType | null
    _min: ReporteMinAggregateOutputType | null
    _max: ReporteMaxAggregateOutputType | null
  }

  export type ReporteAvgAggregateOutputType = {
    id: number | null
    publicacionId: number | null
  }

  export type ReporteSumAggregateOutputType = {
    id: number | null
    publicacionId: number | null
  }

  export type ReporteMinAggregateOutputType = {
    id: number | null
    publicacionId: number | null
    motivo: string | null
    estado: string | null
    creadoEn: Date | null
  }

  export type ReporteMaxAggregateOutputType = {
    id: number | null
    publicacionId: number | null
    motivo: string | null
    estado: string | null
    creadoEn: Date | null
  }

  export type ReporteCountAggregateOutputType = {
    id: number
    publicacionId: number
    motivo: number
    estado: number
    creadoEn: number
    _all: number
  }


  export type ReporteAvgAggregateInputType = {
    id?: true
    publicacionId?: true
  }

  export type ReporteSumAggregateInputType = {
    id?: true
    publicacionId?: true
  }

  export type ReporteMinAggregateInputType = {
    id?: true
    publicacionId?: true
    motivo?: true
    estado?: true
    creadoEn?: true
  }

  export type ReporteMaxAggregateInputType = {
    id?: true
    publicacionId?: true
    motivo?: true
    estado?: true
    creadoEn?: true
  }

  export type ReporteCountAggregateInputType = {
    id?: true
    publicacionId?: true
    motivo?: true
    estado?: true
    creadoEn?: true
    _all?: true
  }

  export type ReporteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reporte to aggregate.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reportes
    **/
    _count?: true | ReporteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReporteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReporteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReporteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReporteMaxAggregateInputType
  }

  export type GetReporteAggregateType<T extends ReporteAggregateArgs> = {
        [P in keyof T & keyof AggregateReporte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReporte[P]>
      : GetScalarType<T[P], AggregateReporte[P]>
  }




  export type ReporteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReporteWhereInput
    orderBy?: ReporteOrderByWithAggregationInput | ReporteOrderByWithAggregationInput[]
    by: ReporteScalarFieldEnum[] | ReporteScalarFieldEnum
    having?: ReporteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReporteCountAggregateInputType | true
    _avg?: ReporteAvgAggregateInputType
    _sum?: ReporteSumAggregateInputType
    _min?: ReporteMinAggregateInputType
    _max?: ReporteMaxAggregateInputType
  }

  export type ReporteGroupByOutputType = {
    id: number
    publicacionId: number
    motivo: string
    estado: string
    creadoEn: Date
    _count: ReporteCountAggregateOutputType | null
    _avg: ReporteAvgAggregateOutputType | null
    _sum: ReporteSumAggregateOutputType | null
    _min: ReporteMinAggregateOutputType | null
    _max: ReporteMaxAggregateOutputType | null
  }

  type GetReporteGroupByPayload<T extends ReporteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReporteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReporteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReporteGroupByOutputType[P]>
            : GetScalarType<T[P], ReporteGroupByOutputType[P]>
        }
      >
    >


  export type ReporteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicacionId?: boolean
    motivo?: boolean
    estado?: boolean
    creadoEn?: boolean
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporte"]>

  export type ReporteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicacionId?: boolean
    motivo?: boolean
    estado?: boolean
    creadoEn?: boolean
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporte"]>

  export type ReporteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicacionId?: boolean
    motivo?: boolean
    estado?: boolean
    creadoEn?: boolean
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporte"]>

  export type ReporteSelectScalar = {
    id?: boolean
    publicacionId?: boolean
    motivo?: boolean
    estado?: boolean
    creadoEn?: boolean
  }

  export type ReporteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicacionId" | "motivo" | "estado" | "creadoEn", ExtArgs["result"]["reporte"]>
  export type ReporteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }
  export type ReporteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }
  export type ReporteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }

  export type $ReportePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reporte"
    objects: {
      publicacion: Prisma.$PublicacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      publicacionId: number
      motivo: string
      estado: string
      creadoEn: Date
    }, ExtArgs["result"]["reporte"]>
    composites: {}
  }

  type ReporteGetPayload<S extends boolean | null | undefined | ReporteDefaultArgs> = $Result.GetResult<Prisma.$ReportePayload, S>

  type ReporteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReporteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReporteCountAggregateInputType | true
    }

  export interface ReporteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reporte'], meta: { name: 'Reporte' } }
    /**
     * Find zero or one Reporte that matches the filter.
     * @param {ReporteFindUniqueArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReporteFindUniqueArgs>(args: SelectSubset<T, ReporteFindUniqueArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reporte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReporteFindUniqueOrThrowArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReporteFindUniqueOrThrowArgs>(args: SelectSubset<T, ReporteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reporte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteFindFirstArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReporteFindFirstArgs>(args?: SelectSubset<T, ReporteFindFirstArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reporte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteFindFirstOrThrowArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReporteFindFirstOrThrowArgs>(args?: SelectSubset<T, ReporteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reportes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reportes
     * const reportes = await prisma.reporte.findMany()
     * 
     * // Get first 10 Reportes
     * const reportes = await prisma.reporte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reporteWithIdOnly = await prisma.reporte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReporteFindManyArgs>(args?: SelectSubset<T, ReporteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reporte.
     * @param {ReporteCreateArgs} args - Arguments to create a Reporte.
     * @example
     * // Create one Reporte
     * const Reporte = await prisma.reporte.create({
     *   data: {
     *     // ... data to create a Reporte
     *   }
     * })
     * 
     */
    create<T extends ReporteCreateArgs>(args: SelectSubset<T, ReporteCreateArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reportes.
     * @param {ReporteCreateManyArgs} args - Arguments to create many Reportes.
     * @example
     * // Create many Reportes
     * const reporte = await prisma.reporte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReporteCreateManyArgs>(args?: SelectSubset<T, ReporteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reportes and returns the data saved in the database.
     * @param {ReporteCreateManyAndReturnArgs} args - Arguments to create many Reportes.
     * @example
     * // Create many Reportes
     * const reporte = await prisma.reporte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reportes and only return the `id`
     * const reporteWithIdOnly = await prisma.reporte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReporteCreateManyAndReturnArgs>(args?: SelectSubset<T, ReporteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reporte.
     * @param {ReporteDeleteArgs} args - Arguments to delete one Reporte.
     * @example
     * // Delete one Reporte
     * const Reporte = await prisma.reporte.delete({
     *   where: {
     *     // ... filter to delete one Reporte
     *   }
     * })
     * 
     */
    delete<T extends ReporteDeleteArgs>(args: SelectSubset<T, ReporteDeleteArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reporte.
     * @param {ReporteUpdateArgs} args - Arguments to update one Reporte.
     * @example
     * // Update one Reporte
     * const reporte = await prisma.reporte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReporteUpdateArgs>(args: SelectSubset<T, ReporteUpdateArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reportes.
     * @param {ReporteDeleteManyArgs} args - Arguments to filter Reportes to delete.
     * @example
     * // Delete a few Reportes
     * const { count } = await prisma.reporte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReporteDeleteManyArgs>(args?: SelectSubset<T, ReporteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reportes
     * const reporte = await prisma.reporte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReporteUpdateManyArgs>(args: SelectSubset<T, ReporteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reportes and returns the data updated in the database.
     * @param {ReporteUpdateManyAndReturnArgs} args - Arguments to update many Reportes.
     * @example
     * // Update many Reportes
     * const reporte = await prisma.reporte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reportes and only return the `id`
     * const reporteWithIdOnly = await prisma.reporte.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReporteUpdateManyAndReturnArgs>(args: SelectSubset<T, ReporteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reporte.
     * @param {ReporteUpsertArgs} args - Arguments to update or create a Reporte.
     * @example
     * // Update or create a Reporte
     * const reporte = await prisma.reporte.upsert({
     *   create: {
     *     // ... data to create a Reporte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reporte we want to update
     *   }
     * })
     */
    upsert<T extends ReporteUpsertArgs>(args: SelectSubset<T, ReporteUpsertArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteCountArgs} args - Arguments to filter Reportes to count.
     * @example
     * // Count the number of Reportes
     * const count = await prisma.reporte.count({
     *   where: {
     *     // ... the filter for the Reportes we want to count
     *   }
     * })
    **/
    count<T extends ReporteCountArgs>(
      args?: Subset<T, ReporteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReporteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reporte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReporteAggregateArgs>(args: Subset<T, ReporteAggregateArgs>): Prisma.PrismaPromise<GetReporteAggregateType<T>>

    /**
     * Group by Reporte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReporteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReporteGroupByArgs['orderBy'] }
        : { orderBy?: ReporteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReporteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReporteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reporte model
   */
  readonly fields: ReporteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reporte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReporteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicacion<T extends PublicacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicacionDefaultArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reporte model
   */
  interface ReporteFieldRefs {
    readonly id: FieldRef<"Reporte", 'Int'>
    readonly publicacionId: FieldRef<"Reporte", 'Int'>
    readonly motivo: FieldRef<"Reporte", 'String'>
    readonly estado: FieldRef<"Reporte", 'String'>
    readonly creadoEn: FieldRef<"Reporte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reporte findUnique
   */
  export type ReporteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte findUniqueOrThrow
   */
  export type ReporteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte findFirst
   */
  export type ReporteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reportes.
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reportes.
     */
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Reporte findFirstOrThrow
   */
  export type ReporteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reportes.
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reportes.
     */
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Reporte findMany
   */
  export type ReporteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reportes to fetch.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reportes.
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reportes.
     */
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Reporte create
   */
  export type ReporteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * The data needed to create a Reporte.
     */
    data: XOR<ReporteCreateInput, ReporteUncheckedCreateInput>
  }

  /**
   * Reporte createMany
   */
  export type ReporteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reportes.
     */
    data: ReporteCreateManyInput | ReporteCreateManyInput[]
  }

  /**
   * Reporte createManyAndReturn
   */
  export type ReporteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * The data used to create many Reportes.
     */
    data: ReporteCreateManyInput | ReporteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reporte update
   */
  export type ReporteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * The data needed to update a Reporte.
     */
    data: XOR<ReporteUpdateInput, ReporteUncheckedUpdateInput>
    /**
     * Choose, which Reporte to update.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte updateMany
   */
  export type ReporteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reportes.
     */
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyInput>
    /**
     * Filter which Reportes to update
     */
    where?: ReporteWhereInput
    /**
     * Limit how many Reportes to update.
     */
    limit?: number
  }

  /**
   * Reporte updateManyAndReturn
   */
  export type ReporteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * The data used to update Reportes.
     */
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyInput>
    /**
     * Filter which Reportes to update
     */
    where?: ReporteWhereInput
    /**
     * Limit how many Reportes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reporte upsert
   */
  export type ReporteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * The filter to search for the Reporte to update in case it exists.
     */
    where: ReporteWhereUniqueInput
    /**
     * In case the Reporte found by the `where` argument doesn't exist, create a new Reporte with this data.
     */
    create: XOR<ReporteCreateInput, ReporteUncheckedCreateInput>
    /**
     * In case the Reporte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReporteUpdateInput, ReporteUncheckedUpdateInput>
  }

  /**
   * Reporte delete
   */
  export type ReporteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter which Reporte to delete.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte deleteMany
   */
  export type ReporteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reportes to delete
     */
    where?: ReporteWhereInput
    /**
     * Limit how many Reportes to delete.
     */
    limit?: number
  }

  /**
   * Reporte without action
   */
  export type ReporteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    passwordHash: 'passwordHash',
    telefono: 'telefono',
    rol: 'rol',
    creadoEn: 'creadoEn'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    categoriaPadreId: 'categoriaPadreId'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const PublicacionScalarFieldEnum: {
    id: 'id',
    vendedorId: 'vendedorId',
    categoriaId: 'categoriaId',
    titulo: 'titulo',
    descripcion: 'descripcion',
    cantidad: 'cantidad',
    unidad: 'unidad',
    precio: 'precio',
    latitud: 'latitud',
    longitud: 'longitud',
    estado: 'estado',
    fechaVencimiento: 'fechaVencimiento',
    creadoEn: 'creadoEn'
  };

  export type PublicacionScalarFieldEnum = (typeof PublicacionScalarFieldEnum)[keyof typeof PublicacionScalarFieldEnum]


  export const PublicacionFotoScalarFieldEnum: {
    id: 'id',
    publicacionId: 'publicacionId',
    url: 'url',
    orden: 'orden'
  };

  export type PublicacionFotoScalarFieldEnum = (typeof PublicacionFotoScalarFieldEnum)[keyof typeof PublicacionFotoScalarFieldEnum]


  export const BusquedaGuardadaScalarFieldEnum: {
    id: 'id',
    compradorId: 'compradorId',
    categoriaId: 'categoriaId',
    palabrasClave: 'palabrasClave',
    latitud: 'latitud',
    longitud: 'longitud',
    radioKm: 'radioKm',
    precioMaximo: 'precioMaximo',
    activa: 'activa',
    creadoEn: 'creadoEn'
  };

  export type BusquedaGuardadaScalarFieldEnum = (typeof BusquedaGuardadaScalarFieldEnum)[keyof typeof BusquedaGuardadaScalarFieldEnum]


  export const AlertaScalarFieldEnum: {
    id: 'id',
    busquedaId: 'busquedaId',
    publicacionId: 'publicacionId',
    leida: 'leida',
    creadoEn: 'creadoEn'
  };

  export type AlertaScalarFieldEnum = (typeof AlertaScalarFieldEnum)[keyof typeof AlertaScalarFieldEnum]


  export const ConversacionScalarFieldEnum: {
    id: 'id',
    publicacionId: 'publicacionId',
    compradorId: 'compradorId',
    vendedorId: 'vendedorId',
    telefonoRevelado: 'telefonoRevelado',
    creadoEn: 'creadoEn'
  };

  export type ConversacionScalarFieldEnum = (typeof ConversacionScalarFieldEnum)[keyof typeof ConversacionScalarFieldEnum]


  export const MensajeScalarFieldEnum: {
    id: 'id',
    conversacionId: 'conversacionId',
    emisorId: 'emisorId',
    texto: 'texto',
    creadoEn: 'creadoEn'
  };

  export type MensajeScalarFieldEnum = (typeof MensajeScalarFieldEnum)[keyof typeof MensajeScalarFieldEnum]


  export const ReporteScalarFieldEnum: {
    id: 'id',
    publicacionId: 'publicacionId',
    motivo: 'motivo',
    estado: 'estado',
    creadoEn: 'creadoEn'
  };

  export type ReporteScalarFieldEnum = (typeof ReporteScalarFieldEnum)[keyof typeof ReporteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    rol?: StringFilter<"Usuario"> | string
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    publicaciones?: PublicacionListRelationFilter
    busquedasGuardadas?: BusquedaGuardadaListRelationFilter
    conversacionesComoComprador?: ConversacionListRelationFilter
    conversacionesComoVendedor?: ConversacionListRelationFilter
    mensajes?: MensajeListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    passwordHash?: SortOrder
    telefono?: SortOrderInput | SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
    publicaciones?: PublicacionOrderByRelationAggregateInput
    busquedasGuardadas?: BusquedaGuardadaOrderByRelationAggregateInput
    conversacionesComoComprador?: ConversacionOrderByRelationAggregateInput
    conversacionesComoVendedor?: ConversacionOrderByRelationAggregateInput
    mensajes?: MensajeOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    rol?: StringFilter<"Usuario"> | string
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    publicaciones?: PublicacionListRelationFilter
    busquedasGuardadas?: BusquedaGuardadaListRelationFilter
    conversacionesComoComprador?: ConversacionListRelationFilter
    conversacionesComoVendedor?: ConversacionListRelationFilter
    mensajes?: MensajeListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    passwordHash?: SortOrder
    telefono?: SortOrderInput | SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    passwordHash?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    rol?: StringWithAggregatesFilter<"Usuario"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    categoriaPadreId?: IntNullableFilter<"Categoria"> | number | null
    categoriaPadre?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    subcategorias?: CategoriaListRelationFilter
    publicaciones?: PublicacionListRelationFilter
    busquedasGuardadas?: BusquedaGuardadaListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    categoriaPadreId?: SortOrderInput | SortOrder
    categoriaPadre?: CategoriaOrderByWithRelationInput
    subcategorias?: CategoriaOrderByRelationAggregateInput
    publicaciones?: PublicacionOrderByRelationAggregateInput
    busquedasGuardadas?: BusquedaGuardadaOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nombre?: StringFilter<"Categoria"> | string
    categoriaPadreId?: IntNullableFilter<"Categoria"> | number | null
    categoriaPadre?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    subcategorias?: CategoriaListRelationFilter
    publicaciones?: PublicacionListRelationFilter
    busquedasGuardadas?: BusquedaGuardadaListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    categoriaPadreId?: SortOrderInput | SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
    categoriaPadreId?: IntNullableWithAggregatesFilter<"Categoria"> | number | null
  }

  export type PublicacionWhereInput = {
    AND?: PublicacionWhereInput | PublicacionWhereInput[]
    OR?: PublicacionWhereInput[]
    NOT?: PublicacionWhereInput | PublicacionWhereInput[]
    id?: IntFilter<"Publicacion"> | number
    vendedorId?: IntFilter<"Publicacion"> | number
    categoriaId?: IntFilter<"Publicacion"> | number
    titulo?: StringFilter<"Publicacion"> | string
    descripcion?: StringFilter<"Publicacion"> | string
    cantidad?: FloatFilter<"Publicacion"> | number
    unidad?: StringFilter<"Publicacion"> | string
    precio?: FloatFilter<"Publicacion"> | number
    latitud?: FloatFilter<"Publicacion"> | number
    longitud?: FloatFilter<"Publicacion"> | number
    estado?: StringFilter<"Publicacion"> | string
    fechaVencimiento?: DateTimeFilter<"Publicacion"> | Date | string
    creadoEn?: DateTimeFilter<"Publicacion"> | Date | string
    vendedor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    fotos?: PublicacionFotoListRelationFilter
    alertas?: AlertaListRelationFilter
    conversaciones?: ConversacionListRelationFilter
    reportes?: ReporteListRelationFilter
  }

  export type PublicacionOrderByWithRelationInput = {
    id?: SortOrder
    vendedorId?: SortOrder
    categoriaId?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    precio?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    estado?: SortOrder
    fechaVencimiento?: SortOrder
    creadoEn?: SortOrder
    vendedor?: UsuarioOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
    fotos?: PublicacionFotoOrderByRelationAggregateInput
    alertas?: AlertaOrderByRelationAggregateInput
    conversaciones?: ConversacionOrderByRelationAggregateInput
    reportes?: ReporteOrderByRelationAggregateInput
  }

  export type PublicacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublicacionWhereInput | PublicacionWhereInput[]
    OR?: PublicacionWhereInput[]
    NOT?: PublicacionWhereInput | PublicacionWhereInput[]
    vendedorId?: IntFilter<"Publicacion"> | number
    categoriaId?: IntFilter<"Publicacion"> | number
    titulo?: StringFilter<"Publicacion"> | string
    descripcion?: StringFilter<"Publicacion"> | string
    cantidad?: FloatFilter<"Publicacion"> | number
    unidad?: StringFilter<"Publicacion"> | string
    precio?: FloatFilter<"Publicacion"> | number
    latitud?: FloatFilter<"Publicacion"> | number
    longitud?: FloatFilter<"Publicacion"> | number
    estado?: StringFilter<"Publicacion"> | string
    fechaVencimiento?: DateTimeFilter<"Publicacion"> | Date | string
    creadoEn?: DateTimeFilter<"Publicacion"> | Date | string
    vendedor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    fotos?: PublicacionFotoListRelationFilter
    alertas?: AlertaListRelationFilter
    conversaciones?: ConversacionListRelationFilter
    reportes?: ReporteListRelationFilter
  }, "id">

  export type PublicacionOrderByWithAggregationInput = {
    id?: SortOrder
    vendedorId?: SortOrder
    categoriaId?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    precio?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    estado?: SortOrder
    fechaVencimiento?: SortOrder
    creadoEn?: SortOrder
    _count?: PublicacionCountOrderByAggregateInput
    _avg?: PublicacionAvgOrderByAggregateInput
    _max?: PublicacionMaxOrderByAggregateInput
    _min?: PublicacionMinOrderByAggregateInput
    _sum?: PublicacionSumOrderByAggregateInput
  }

  export type PublicacionScalarWhereWithAggregatesInput = {
    AND?: PublicacionScalarWhereWithAggregatesInput | PublicacionScalarWhereWithAggregatesInput[]
    OR?: PublicacionScalarWhereWithAggregatesInput[]
    NOT?: PublicacionScalarWhereWithAggregatesInput | PublicacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Publicacion"> | number
    vendedorId?: IntWithAggregatesFilter<"Publicacion"> | number
    categoriaId?: IntWithAggregatesFilter<"Publicacion"> | number
    titulo?: StringWithAggregatesFilter<"Publicacion"> | string
    descripcion?: StringWithAggregatesFilter<"Publicacion"> | string
    cantidad?: FloatWithAggregatesFilter<"Publicacion"> | number
    unidad?: StringWithAggregatesFilter<"Publicacion"> | string
    precio?: FloatWithAggregatesFilter<"Publicacion"> | number
    latitud?: FloatWithAggregatesFilter<"Publicacion"> | number
    longitud?: FloatWithAggregatesFilter<"Publicacion"> | number
    estado?: StringWithAggregatesFilter<"Publicacion"> | string
    fechaVencimiento?: DateTimeWithAggregatesFilter<"Publicacion"> | Date | string
    creadoEn?: DateTimeWithAggregatesFilter<"Publicacion"> | Date | string
  }

  export type PublicacionFotoWhereInput = {
    AND?: PublicacionFotoWhereInput | PublicacionFotoWhereInput[]
    OR?: PublicacionFotoWhereInput[]
    NOT?: PublicacionFotoWhereInput | PublicacionFotoWhereInput[]
    id?: IntFilter<"PublicacionFoto"> | number
    publicacionId?: IntFilter<"PublicacionFoto"> | number
    url?: StringFilter<"PublicacionFoto"> | string
    orden?: IntFilter<"PublicacionFoto"> | number
    publicacion?: XOR<PublicacionScalarRelationFilter, PublicacionWhereInput>
  }

  export type PublicacionFotoOrderByWithRelationInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    url?: SortOrder
    orden?: SortOrder
    publicacion?: PublicacionOrderByWithRelationInput
  }

  export type PublicacionFotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublicacionFotoWhereInput | PublicacionFotoWhereInput[]
    OR?: PublicacionFotoWhereInput[]
    NOT?: PublicacionFotoWhereInput | PublicacionFotoWhereInput[]
    publicacionId?: IntFilter<"PublicacionFoto"> | number
    url?: StringFilter<"PublicacionFoto"> | string
    orden?: IntFilter<"PublicacionFoto"> | number
    publicacion?: XOR<PublicacionScalarRelationFilter, PublicacionWhereInput>
  }, "id">

  export type PublicacionFotoOrderByWithAggregationInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    url?: SortOrder
    orden?: SortOrder
    _count?: PublicacionFotoCountOrderByAggregateInput
    _avg?: PublicacionFotoAvgOrderByAggregateInput
    _max?: PublicacionFotoMaxOrderByAggregateInput
    _min?: PublicacionFotoMinOrderByAggregateInput
    _sum?: PublicacionFotoSumOrderByAggregateInput
  }

  export type PublicacionFotoScalarWhereWithAggregatesInput = {
    AND?: PublicacionFotoScalarWhereWithAggregatesInput | PublicacionFotoScalarWhereWithAggregatesInput[]
    OR?: PublicacionFotoScalarWhereWithAggregatesInput[]
    NOT?: PublicacionFotoScalarWhereWithAggregatesInput | PublicacionFotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PublicacionFoto"> | number
    publicacionId?: IntWithAggregatesFilter<"PublicacionFoto"> | number
    url?: StringWithAggregatesFilter<"PublicacionFoto"> | string
    orden?: IntWithAggregatesFilter<"PublicacionFoto"> | number
  }

  export type BusquedaGuardadaWhereInput = {
    AND?: BusquedaGuardadaWhereInput | BusquedaGuardadaWhereInput[]
    OR?: BusquedaGuardadaWhereInput[]
    NOT?: BusquedaGuardadaWhereInput | BusquedaGuardadaWhereInput[]
    id?: IntFilter<"BusquedaGuardada"> | number
    compradorId?: IntFilter<"BusquedaGuardada"> | number
    categoriaId?: IntFilter<"BusquedaGuardada"> | number
    palabrasClave?: StringNullableFilter<"BusquedaGuardada"> | string | null
    latitud?: FloatFilter<"BusquedaGuardada"> | number
    longitud?: FloatFilter<"BusquedaGuardada"> | number
    radioKm?: FloatFilter<"BusquedaGuardada"> | number
    precioMaximo?: FloatNullableFilter<"BusquedaGuardada"> | number | null
    activa?: BoolFilter<"BusquedaGuardada"> | boolean
    creadoEn?: DateTimeFilter<"BusquedaGuardada"> | Date | string
    comprador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    alertas?: AlertaListRelationFilter
  }

  export type BusquedaGuardadaOrderByWithRelationInput = {
    id?: SortOrder
    compradorId?: SortOrder
    categoriaId?: SortOrder
    palabrasClave?: SortOrderInput | SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    radioKm?: SortOrder
    precioMaximo?: SortOrderInput | SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    comprador?: UsuarioOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
    alertas?: AlertaOrderByRelationAggregateInput
  }

  export type BusquedaGuardadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BusquedaGuardadaWhereInput | BusquedaGuardadaWhereInput[]
    OR?: BusquedaGuardadaWhereInput[]
    NOT?: BusquedaGuardadaWhereInput | BusquedaGuardadaWhereInput[]
    compradorId?: IntFilter<"BusquedaGuardada"> | number
    categoriaId?: IntFilter<"BusquedaGuardada"> | number
    palabrasClave?: StringNullableFilter<"BusquedaGuardada"> | string | null
    latitud?: FloatFilter<"BusquedaGuardada"> | number
    longitud?: FloatFilter<"BusquedaGuardada"> | number
    radioKm?: FloatFilter<"BusquedaGuardada"> | number
    precioMaximo?: FloatNullableFilter<"BusquedaGuardada"> | number | null
    activa?: BoolFilter<"BusquedaGuardada"> | boolean
    creadoEn?: DateTimeFilter<"BusquedaGuardada"> | Date | string
    comprador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    alertas?: AlertaListRelationFilter
  }, "id">

  export type BusquedaGuardadaOrderByWithAggregationInput = {
    id?: SortOrder
    compradorId?: SortOrder
    categoriaId?: SortOrder
    palabrasClave?: SortOrderInput | SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    radioKm?: SortOrder
    precioMaximo?: SortOrderInput | SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    _count?: BusquedaGuardadaCountOrderByAggregateInput
    _avg?: BusquedaGuardadaAvgOrderByAggregateInput
    _max?: BusquedaGuardadaMaxOrderByAggregateInput
    _min?: BusquedaGuardadaMinOrderByAggregateInput
    _sum?: BusquedaGuardadaSumOrderByAggregateInput
  }

  export type BusquedaGuardadaScalarWhereWithAggregatesInput = {
    AND?: BusquedaGuardadaScalarWhereWithAggregatesInput | BusquedaGuardadaScalarWhereWithAggregatesInput[]
    OR?: BusquedaGuardadaScalarWhereWithAggregatesInput[]
    NOT?: BusquedaGuardadaScalarWhereWithAggregatesInput | BusquedaGuardadaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusquedaGuardada"> | number
    compradorId?: IntWithAggregatesFilter<"BusquedaGuardada"> | number
    categoriaId?: IntWithAggregatesFilter<"BusquedaGuardada"> | number
    palabrasClave?: StringNullableWithAggregatesFilter<"BusquedaGuardada"> | string | null
    latitud?: FloatWithAggregatesFilter<"BusquedaGuardada"> | number
    longitud?: FloatWithAggregatesFilter<"BusquedaGuardada"> | number
    radioKm?: FloatWithAggregatesFilter<"BusquedaGuardada"> | number
    precioMaximo?: FloatNullableWithAggregatesFilter<"BusquedaGuardada"> | number | null
    activa?: BoolWithAggregatesFilter<"BusquedaGuardada"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"BusquedaGuardada"> | Date | string
  }

  export type AlertaWhereInput = {
    AND?: AlertaWhereInput | AlertaWhereInput[]
    OR?: AlertaWhereInput[]
    NOT?: AlertaWhereInput | AlertaWhereInput[]
    id?: IntFilter<"Alerta"> | number
    busquedaId?: IntFilter<"Alerta"> | number
    publicacionId?: IntFilter<"Alerta"> | number
    leida?: BoolFilter<"Alerta"> | boolean
    creadoEn?: DateTimeFilter<"Alerta"> | Date | string
    busqueda?: XOR<BusquedaGuardadaScalarRelationFilter, BusquedaGuardadaWhereInput>
    publicacion?: XOR<PublicacionScalarRelationFilter, PublicacionWhereInput>
  }

  export type AlertaOrderByWithRelationInput = {
    id?: SortOrder
    busquedaId?: SortOrder
    publicacionId?: SortOrder
    leida?: SortOrder
    creadoEn?: SortOrder
    busqueda?: BusquedaGuardadaOrderByWithRelationInput
    publicacion?: PublicacionOrderByWithRelationInput
  }

  export type AlertaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlertaWhereInput | AlertaWhereInput[]
    OR?: AlertaWhereInput[]
    NOT?: AlertaWhereInput | AlertaWhereInput[]
    busquedaId?: IntFilter<"Alerta"> | number
    publicacionId?: IntFilter<"Alerta"> | number
    leida?: BoolFilter<"Alerta"> | boolean
    creadoEn?: DateTimeFilter<"Alerta"> | Date | string
    busqueda?: XOR<BusquedaGuardadaScalarRelationFilter, BusquedaGuardadaWhereInput>
    publicacion?: XOR<PublicacionScalarRelationFilter, PublicacionWhereInput>
  }, "id">

  export type AlertaOrderByWithAggregationInput = {
    id?: SortOrder
    busquedaId?: SortOrder
    publicacionId?: SortOrder
    leida?: SortOrder
    creadoEn?: SortOrder
    _count?: AlertaCountOrderByAggregateInput
    _avg?: AlertaAvgOrderByAggregateInput
    _max?: AlertaMaxOrderByAggregateInput
    _min?: AlertaMinOrderByAggregateInput
    _sum?: AlertaSumOrderByAggregateInput
  }

  export type AlertaScalarWhereWithAggregatesInput = {
    AND?: AlertaScalarWhereWithAggregatesInput | AlertaScalarWhereWithAggregatesInput[]
    OR?: AlertaScalarWhereWithAggregatesInput[]
    NOT?: AlertaScalarWhereWithAggregatesInput | AlertaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alerta"> | number
    busquedaId?: IntWithAggregatesFilter<"Alerta"> | number
    publicacionId?: IntWithAggregatesFilter<"Alerta"> | number
    leida?: BoolWithAggregatesFilter<"Alerta"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Alerta"> | Date | string
  }

  export type ConversacionWhereInput = {
    AND?: ConversacionWhereInput | ConversacionWhereInput[]
    OR?: ConversacionWhereInput[]
    NOT?: ConversacionWhereInput | ConversacionWhereInput[]
    id?: IntFilter<"Conversacion"> | number
    publicacionId?: IntFilter<"Conversacion"> | number
    compradorId?: IntFilter<"Conversacion"> | number
    vendedorId?: IntFilter<"Conversacion"> | number
    telefonoRevelado?: BoolFilter<"Conversacion"> | boolean
    creadoEn?: DateTimeFilter<"Conversacion"> | Date | string
    publicacion?: XOR<PublicacionScalarRelationFilter, PublicacionWhereInput>
    comprador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vendedor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mensajes?: MensajeListRelationFilter
  }

  export type ConversacionOrderByWithRelationInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    compradorId?: SortOrder
    vendedorId?: SortOrder
    telefonoRevelado?: SortOrder
    creadoEn?: SortOrder
    publicacion?: PublicacionOrderByWithRelationInput
    comprador?: UsuarioOrderByWithRelationInput
    vendedor?: UsuarioOrderByWithRelationInput
    mensajes?: MensajeOrderByRelationAggregateInput
  }

  export type ConversacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConversacionWhereInput | ConversacionWhereInput[]
    OR?: ConversacionWhereInput[]
    NOT?: ConversacionWhereInput | ConversacionWhereInput[]
    publicacionId?: IntFilter<"Conversacion"> | number
    compradorId?: IntFilter<"Conversacion"> | number
    vendedorId?: IntFilter<"Conversacion"> | number
    telefonoRevelado?: BoolFilter<"Conversacion"> | boolean
    creadoEn?: DateTimeFilter<"Conversacion"> | Date | string
    publicacion?: XOR<PublicacionScalarRelationFilter, PublicacionWhereInput>
    comprador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vendedor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mensajes?: MensajeListRelationFilter
  }, "id">

  export type ConversacionOrderByWithAggregationInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    compradorId?: SortOrder
    vendedorId?: SortOrder
    telefonoRevelado?: SortOrder
    creadoEn?: SortOrder
    _count?: ConversacionCountOrderByAggregateInput
    _avg?: ConversacionAvgOrderByAggregateInput
    _max?: ConversacionMaxOrderByAggregateInput
    _min?: ConversacionMinOrderByAggregateInput
    _sum?: ConversacionSumOrderByAggregateInput
  }

  export type ConversacionScalarWhereWithAggregatesInput = {
    AND?: ConversacionScalarWhereWithAggregatesInput | ConversacionScalarWhereWithAggregatesInput[]
    OR?: ConversacionScalarWhereWithAggregatesInput[]
    NOT?: ConversacionScalarWhereWithAggregatesInput | ConversacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversacion"> | number
    publicacionId?: IntWithAggregatesFilter<"Conversacion"> | number
    compradorId?: IntWithAggregatesFilter<"Conversacion"> | number
    vendedorId?: IntWithAggregatesFilter<"Conversacion"> | number
    telefonoRevelado?: BoolWithAggregatesFilter<"Conversacion"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Conversacion"> | Date | string
  }

  export type MensajeWhereInput = {
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    id?: IntFilter<"Mensaje"> | number
    conversacionId?: IntFilter<"Mensaje"> | number
    emisorId?: IntFilter<"Mensaje"> | number
    texto?: StringFilter<"Mensaje"> | string
    creadoEn?: DateTimeFilter<"Mensaje"> | Date | string
    conversacion?: XOR<ConversacionScalarRelationFilter, ConversacionWhereInput>
    emisor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type MensajeOrderByWithRelationInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    emisorId?: SortOrder
    texto?: SortOrder
    creadoEn?: SortOrder
    conversacion?: ConversacionOrderByWithRelationInput
    emisor?: UsuarioOrderByWithRelationInput
  }

  export type MensajeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    conversacionId?: IntFilter<"Mensaje"> | number
    emisorId?: IntFilter<"Mensaje"> | number
    texto?: StringFilter<"Mensaje"> | string
    creadoEn?: DateTimeFilter<"Mensaje"> | Date | string
    conversacion?: XOR<ConversacionScalarRelationFilter, ConversacionWhereInput>
    emisor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type MensajeOrderByWithAggregationInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    emisorId?: SortOrder
    texto?: SortOrder
    creadoEn?: SortOrder
    _count?: MensajeCountOrderByAggregateInput
    _avg?: MensajeAvgOrderByAggregateInput
    _max?: MensajeMaxOrderByAggregateInput
    _min?: MensajeMinOrderByAggregateInput
    _sum?: MensajeSumOrderByAggregateInput
  }

  export type MensajeScalarWhereWithAggregatesInput = {
    AND?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    OR?: MensajeScalarWhereWithAggregatesInput[]
    NOT?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mensaje"> | number
    conversacionId?: IntWithAggregatesFilter<"Mensaje"> | number
    emisorId?: IntWithAggregatesFilter<"Mensaje"> | number
    texto?: StringWithAggregatesFilter<"Mensaje"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Mensaje"> | Date | string
  }

  export type ReporteWhereInput = {
    AND?: ReporteWhereInput | ReporteWhereInput[]
    OR?: ReporteWhereInput[]
    NOT?: ReporteWhereInput | ReporteWhereInput[]
    id?: IntFilter<"Reporte"> | number
    publicacionId?: IntFilter<"Reporte"> | number
    motivo?: StringFilter<"Reporte"> | string
    estado?: StringFilter<"Reporte"> | string
    creadoEn?: DateTimeFilter<"Reporte"> | Date | string
    publicacion?: XOR<PublicacionScalarRelationFilter, PublicacionWhereInput>
  }

  export type ReporteOrderByWithRelationInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    motivo?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    publicacion?: PublicacionOrderByWithRelationInput
  }

  export type ReporteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReporteWhereInput | ReporteWhereInput[]
    OR?: ReporteWhereInput[]
    NOT?: ReporteWhereInput | ReporteWhereInput[]
    publicacionId?: IntFilter<"Reporte"> | number
    motivo?: StringFilter<"Reporte"> | string
    estado?: StringFilter<"Reporte"> | string
    creadoEn?: DateTimeFilter<"Reporte"> | Date | string
    publicacion?: XOR<PublicacionScalarRelationFilter, PublicacionWhereInput>
  }, "id">

  export type ReporteOrderByWithAggregationInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    motivo?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    _count?: ReporteCountOrderByAggregateInput
    _avg?: ReporteAvgOrderByAggregateInput
    _max?: ReporteMaxOrderByAggregateInput
    _min?: ReporteMinOrderByAggregateInput
    _sum?: ReporteSumOrderByAggregateInput
  }

  export type ReporteScalarWhereWithAggregatesInput = {
    AND?: ReporteScalarWhereWithAggregatesInput | ReporteScalarWhereWithAggregatesInput[]
    OR?: ReporteScalarWhereWithAggregatesInput[]
    NOT?: ReporteScalarWhereWithAggregatesInput | ReporteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reporte"> | number
    publicacionId?: IntWithAggregatesFilter<"Reporte"> | number
    motivo?: StringWithAggregatesFilter<"Reporte"> | string
    estado?: StringWithAggregatesFilter<"Reporte"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Reporte"> | Date | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
    publicaciones?: PublicacionCreateNestedManyWithoutVendedorInput
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutCompradorInput
    conversacionesComoComprador?: ConversacionCreateNestedManyWithoutCompradorInput
    conversacionesComoVendedor?: ConversacionCreateNestedManyWithoutVendedorInput
    mensajes?: MensajeCreateNestedManyWithoutEmisorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
    publicaciones?: PublicacionUncheckedCreateNestedManyWithoutVendedorInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutCompradorInput
    conversacionesComoComprador?: ConversacionUncheckedCreateNestedManyWithoutCompradorInput
    conversacionesComoVendedor?: ConversacionUncheckedCreateNestedManyWithoutVendedorInput
    mensajes?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUpdateManyWithoutVendedorNestedInput
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutCompradorNestedInput
    conversacionesComoComprador?: ConversacionUpdateManyWithoutCompradorNestedInput
    conversacionesComoVendedor?: ConversacionUpdateManyWithoutVendedorNestedInput
    mensajes?: MensajeUpdateManyWithoutEmisorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUncheckedUpdateManyWithoutVendedorNestedInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutCompradorNestedInput
    conversacionesComoComprador?: ConversacionUncheckedUpdateManyWithoutCompradorNestedInput
    conversacionesComoVendedor?: ConversacionUncheckedUpdateManyWithoutVendedorNestedInput
    mensajes?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    nombre: string
    categoriaPadre?: CategoriaCreateNestedOneWithoutSubcategoriasInput
    subcategorias?: CategoriaCreateNestedManyWithoutCategoriaPadreInput
    publicaciones?: PublicacionCreateNestedManyWithoutCategoriaInput
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    categoriaPadreId?: number | null
    subcategorias?: CategoriaUncheckedCreateNestedManyWithoutCategoriaPadreInput
    publicaciones?: PublicacionUncheckedCreateNestedManyWithoutCategoriaInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaPadre?: CategoriaUpdateOneWithoutSubcategoriasNestedInput
    subcategorias?: CategoriaUpdateManyWithoutCategoriaPadreNestedInput
    publicaciones?: PublicacionUpdateManyWithoutCategoriaNestedInput
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaPadreId?: NullableIntFieldUpdateOperationsInput | number | null
    subcategorias?: CategoriaUncheckedUpdateManyWithoutCategoriaPadreNestedInput
    publicaciones?: PublicacionUncheckedUpdateManyWithoutCategoriaNestedInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
    categoriaPadreId?: number | null
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaPadreId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PublicacionCreateInput = {
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    vendedor: UsuarioCreateNestedOneWithoutPublicacionesInput
    categoria: CategoriaCreateNestedOneWithoutPublicacionesInput
    fotos?: PublicacionFotoCreateNestedManyWithoutPublicacionInput
    alertas?: AlertaCreateNestedManyWithoutPublicacionInput
    conversaciones?: ConversacionCreateNestedManyWithoutPublicacionInput
    reportes?: ReporteCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionUncheckedCreateInput = {
    id?: number
    vendedorId: number
    categoriaId: number
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    fotos?: PublicacionFotoUncheckedCreateNestedManyWithoutPublicacionInput
    alertas?: AlertaUncheckedCreateNestedManyWithoutPublicacionInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPublicacionInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    vendedor?: UsuarioUpdateOneRequiredWithoutPublicacionesNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPublicacionesNestedInput
    fotos?: PublicacionFotoUpdateManyWithoutPublicacionNestedInput
    alertas?: AlertaUpdateManyWithoutPublicacionNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPublicacionNestedInput
    reportes?: ReporteUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: PublicacionFotoUncheckedUpdateManyWithoutPublicacionNestedInput
    alertas?: AlertaUncheckedUpdateManyWithoutPublicacionNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPublicacionNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionCreateManyInput = {
    id?: number
    vendedorId: number
    categoriaId: number
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
  }

  export type PublicacionUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionFotoCreateInput = {
    url: string
    orden?: number
    publicacion: PublicacionCreateNestedOneWithoutFotosInput
  }

  export type PublicacionFotoUncheckedCreateInput = {
    id?: number
    publicacionId: number
    url: string
    orden?: number
  }

  export type PublicacionFotoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    publicacion?: PublicacionUpdateOneRequiredWithoutFotosNestedInput
  }

  export type PublicacionFotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type PublicacionFotoCreateManyInput = {
    id?: number
    publicacionId: number
    url: string
    orden?: number
  }

  export type PublicacionFotoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type PublicacionFotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type BusquedaGuardadaCreateInput = {
    palabrasClave?: string | null
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo?: number | null
    activa?: boolean
    creadoEn?: Date | string
    comprador: UsuarioCreateNestedOneWithoutBusquedasGuardadasInput
    categoria: CategoriaCreateNestedOneWithoutBusquedasGuardadasInput
    alertas?: AlertaCreateNestedManyWithoutBusquedaInput
  }

  export type BusquedaGuardadaUncheckedCreateInput = {
    id?: number
    compradorId: number
    categoriaId: number
    palabrasClave?: string | null
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo?: number | null
    activa?: boolean
    creadoEn?: Date | string
    alertas?: AlertaUncheckedCreateNestedManyWithoutBusquedaInput
  }

  export type BusquedaGuardadaUpdateInput = {
    palabrasClave?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    radioKm?: FloatFieldUpdateOperationsInput | number
    precioMaximo?: NullableFloatFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    comprador?: UsuarioUpdateOneRequiredWithoutBusquedasGuardadasNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutBusquedasGuardadasNestedInput
    alertas?: AlertaUpdateManyWithoutBusquedaNestedInput
  }

  export type BusquedaGuardadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    compradorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    palabrasClave?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    radioKm?: FloatFieldUpdateOperationsInput | number
    precioMaximo?: NullableFloatFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    alertas?: AlertaUncheckedUpdateManyWithoutBusquedaNestedInput
  }

  export type BusquedaGuardadaCreateManyInput = {
    id?: number
    compradorId: number
    categoriaId: number
    palabrasClave?: string | null
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo?: number | null
    activa?: boolean
    creadoEn?: Date | string
  }

  export type BusquedaGuardadaUpdateManyMutationInput = {
    palabrasClave?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    radioKm?: FloatFieldUpdateOperationsInput | number
    precioMaximo?: NullableFloatFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusquedaGuardadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    compradorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    palabrasClave?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    radioKm?: FloatFieldUpdateOperationsInput | number
    precioMaximo?: NullableFloatFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaCreateInput = {
    leida?: boolean
    creadoEn?: Date | string
    busqueda: BusquedaGuardadaCreateNestedOneWithoutAlertasInput
    publicacion: PublicacionCreateNestedOneWithoutAlertasInput
  }

  export type AlertaUncheckedCreateInput = {
    id?: number
    busquedaId: number
    publicacionId: number
    leida?: boolean
    creadoEn?: Date | string
  }

  export type AlertaUpdateInput = {
    leida?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    busqueda?: BusquedaGuardadaUpdateOneRequiredWithoutAlertasNestedInput
    publicacion?: PublicacionUpdateOneRequiredWithoutAlertasNestedInput
  }

  export type AlertaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    busquedaId?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    leida?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaCreateManyInput = {
    id?: number
    busquedaId: number
    publicacionId: number
    leida?: boolean
    creadoEn?: Date | string
  }

  export type AlertaUpdateManyMutationInput = {
    leida?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    busquedaId?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    leida?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversacionCreateInput = {
    telefonoRevelado?: boolean
    creadoEn?: Date | string
    publicacion: PublicacionCreateNestedOneWithoutConversacionesInput
    comprador: UsuarioCreateNestedOneWithoutConversacionesComoCompradorInput
    vendedor: UsuarioCreateNestedOneWithoutConversacionesComoVendedorInput
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateInput = {
    id?: number
    publicacionId: number
    compradorId: number
    vendedorId: number
    telefonoRevelado?: boolean
    creadoEn?: Date | string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUpdateInput = {
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacion?: PublicacionUpdateOneRequiredWithoutConversacionesNestedInput
    comprador?: UsuarioUpdateOneRequiredWithoutConversacionesComoCompradorNestedInput
    vendedor?: UsuarioUpdateOneRequiredWithoutConversacionesComoVendedorNestedInput
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    compradorId?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionCreateManyInput = {
    id?: number
    publicacionId: number
    compradorId: number
    vendedorId: number
    telefonoRevelado?: boolean
    creadoEn?: Date | string
  }

  export type ConversacionUpdateManyMutationInput = {
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    compradorId?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateInput = {
    texto: string
    creadoEn?: Date | string
    conversacion: ConversacionCreateNestedOneWithoutMensajesInput
    emisor: UsuarioCreateNestedOneWithoutMensajesInput
  }

  export type MensajeUncheckedCreateInput = {
    id?: number
    conversacionId: number
    emisorId: number
    texto: string
    creadoEn?: Date | string
  }

  export type MensajeUpdateInput = {
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacion?: ConversacionUpdateOneRequiredWithoutMensajesNestedInput
    emisor?: UsuarioUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type MensajeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversacionId?: IntFieldUpdateOperationsInput | number
    emisorId?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateManyInput = {
    id?: number
    conversacionId: number
    emisorId: number
    texto: string
    creadoEn?: Date | string
  }

  export type MensajeUpdateManyMutationInput = {
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversacionId?: IntFieldUpdateOperationsInput | number
    emisorId?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteCreateInput = {
    motivo: string
    estado?: string
    creadoEn?: Date | string
    publicacion: PublicacionCreateNestedOneWithoutReportesInput
  }

  export type ReporteUncheckedCreateInput = {
    id?: number
    publicacionId: number
    motivo: string
    estado?: string
    creadoEn?: Date | string
  }

  export type ReporteUpdateInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacion?: PublicacionUpdateOneRequiredWithoutReportesNestedInput
  }

  export type ReporteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteCreateManyInput = {
    id?: number
    publicacionId: number
    motivo: string
    estado?: string
    creadoEn?: Date | string
  }

  export type ReporteUpdateManyMutationInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PublicacionListRelationFilter = {
    every?: PublicacionWhereInput
    some?: PublicacionWhereInput
    none?: PublicacionWhereInput
  }

  export type BusquedaGuardadaListRelationFilter = {
    every?: BusquedaGuardadaWhereInput
    some?: BusquedaGuardadaWhereInput
    none?: BusquedaGuardadaWhereInput
  }

  export type ConversacionListRelationFilter = {
    every?: ConversacionWhereInput
    some?: ConversacionWhereInput
    none?: ConversacionWhereInput
  }

  export type MensajeListRelationFilter = {
    every?: MensajeWhereInput
    some?: MensajeWhereInput
    none?: MensajeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PublicacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusquedaGuardadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MensajeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    passwordHash?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    passwordHash?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    passwordHash?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriaNullableScalarRelationFilter = {
    is?: CategoriaWhereInput | null
    isNot?: CategoriaWhereInput | null
  }

  export type CategoriaListRelationFilter = {
    every?: CategoriaWhereInput
    some?: CategoriaWhereInput
    none?: CategoriaWhereInput
  }

  export type CategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    categoriaPadreId?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    categoriaPadreId?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    categoriaPadreId?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    categoriaPadreId?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
    categoriaPadreId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type PublicacionFotoListRelationFilter = {
    every?: PublicacionFotoWhereInput
    some?: PublicacionFotoWhereInput
    none?: PublicacionFotoWhereInput
  }

  export type AlertaListRelationFilter = {
    every?: AlertaWhereInput
    some?: AlertaWhereInput
    none?: AlertaWhereInput
  }

  export type ReporteListRelationFilter = {
    every?: ReporteWhereInput
    some?: ReporteWhereInput
    none?: ReporteWhereInput
  }

  export type PublicacionFotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReporteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicacionCountOrderByAggregateInput = {
    id?: SortOrder
    vendedorId?: SortOrder
    categoriaId?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    precio?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    estado?: SortOrder
    fechaVencimiento?: SortOrder
    creadoEn?: SortOrder
  }

  export type PublicacionAvgOrderByAggregateInput = {
    id?: SortOrder
    vendedorId?: SortOrder
    categoriaId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type PublicacionMaxOrderByAggregateInput = {
    id?: SortOrder
    vendedorId?: SortOrder
    categoriaId?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    precio?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    estado?: SortOrder
    fechaVencimiento?: SortOrder
    creadoEn?: SortOrder
  }

  export type PublicacionMinOrderByAggregateInput = {
    id?: SortOrder
    vendedorId?: SortOrder
    categoriaId?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    precio?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    estado?: SortOrder
    fechaVencimiento?: SortOrder
    creadoEn?: SortOrder
  }

  export type PublicacionSumOrderByAggregateInput = {
    id?: SortOrder
    vendedorId?: SortOrder
    categoriaId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PublicacionScalarRelationFilter = {
    is?: PublicacionWhereInput
    isNot?: PublicacionWhereInput
  }

  export type PublicacionFotoCountOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    url?: SortOrder
    orden?: SortOrder
  }

  export type PublicacionFotoAvgOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    orden?: SortOrder
  }

  export type PublicacionFotoMaxOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    url?: SortOrder
    orden?: SortOrder
  }

  export type PublicacionFotoMinOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    url?: SortOrder
    orden?: SortOrder
  }

  export type PublicacionFotoSumOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    orden?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BusquedaGuardadaCountOrderByAggregateInput = {
    id?: SortOrder
    compradorId?: SortOrder
    categoriaId?: SortOrder
    palabrasClave?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    radioKm?: SortOrder
    precioMaximo?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
  }

  export type BusquedaGuardadaAvgOrderByAggregateInput = {
    id?: SortOrder
    compradorId?: SortOrder
    categoriaId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    radioKm?: SortOrder
    precioMaximo?: SortOrder
  }

  export type BusquedaGuardadaMaxOrderByAggregateInput = {
    id?: SortOrder
    compradorId?: SortOrder
    categoriaId?: SortOrder
    palabrasClave?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    radioKm?: SortOrder
    precioMaximo?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
  }

  export type BusquedaGuardadaMinOrderByAggregateInput = {
    id?: SortOrder
    compradorId?: SortOrder
    categoriaId?: SortOrder
    palabrasClave?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    radioKm?: SortOrder
    precioMaximo?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
  }

  export type BusquedaGuardadaSumOrderByAggregateInput = {
    id?: SortOrder
    compradorId?: SortOrder
    categoriaId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    radioKm?: SortOrder
    precioMaximo?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BusquedaGuardadaScalarRelationFilter = {
    is?: BusquedaGuardadaWhereInput
    isNot?: BusquedaGuardadaWhereInput
  }

  export type AlertaCountOrderByAggregateInput = {
    id?: SortOrder
    busquedaId?: SortOrder
    publicacionId?: SortOrder
    leida?: SortOrder
    creadoEn?: SortOrder
  }

  export type AlertaAvgOrderByAggregateInput = {
    id?: SortOrder
    busquedaId?: SortOrder
    publicacionId?: SortOrder
  }

  export type AlertaMaxOrderByAggregateInput = {
    id?: SortOrder
    busquedaId?: SortOrder
    publicacionId?: SortOrder
    leida?: SortOrder
    creadoEn?: SortOrder
  }

  export type AlertaMinOrderByAggregateInput = {
    id?: SortOrder
    busquedaId?: SortOrder
    publicacionId?: SortOrder
    leida?: SortOrder
    creadoEn?: SortOrder
  }

  export type AlertaSumOrderByAggregateInput = {
    id?: SortOrder
    busquedaId?: SortOrder
    publicacionId?: SortOrder
  }

  export type ConversacionCountOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    compradorId?: SortOrder
    vendedorId?: SortOrder
    telefonoRevelado?: SortOrder
    creadoEn?: SortOrder
  }

  export type ConversacionAvgOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    compradorId?: SortOrder
    vendedorId?: SortOrder
  }

  export type ConversacionMaxOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    compradorId?: SortOrder
    vendedorId?: SortOrder
    telefonoRevelado?: SortOrder
    creadoEn?: SortOrder
  }

  export type ConversacionMinOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    compradorId?: SortOrder
    vendedorId?: SortOrder
    telefonoRevelado?: SortOrder
    creadoEn?: SortOrder
  }

  export type ConversacionSumOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    compradorId?: SortOrder
    vendedorId?: SortOrder
  }

  export type ConversacionScalarRelationFilter = {
    is?: ConversacionWhereInput
    isNot?: ConversacionWhereInput
  }

  export type MensajeCountOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    emisorId?: SortOrder
    texto?: SortOrder
    creadoEn?: SortOrder
  }

  export type MensajeAvgOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    emisorId?: SortOrder
  }

  export type MensajeMaxOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    emisorId?: SortOrder
    texto?: SortOrder
    creadoEn?: SortOrder
  }

  export type MensajeMinOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    emisorId?: SortOrder
    texto?: SortOrder
    creadoEn?: SortOrder
  }

  export type MensajeSumOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    emisorId?: SortOrder
  }

  export type ReporteCountOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    motivo?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type ReporteAvgOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
  }

  export type ReporteMaxOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    motivo?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type ReporteMinOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
    motivo?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type ReporteSumOrderByAggregateInput = {
    id?: SortOrder
    publicacionId?: SortOrder
  }

  export type PublicacionCreateNestedManyWithoutVendedorInput = {
    create?: XOR<PublicacionCreateWithoutVendedorInput, PublicacionUncheckedCreateWithoutVendedorInput> | PublicacionCreateWithoutVendedorInput[] | PublicacionUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutVendedorInput | PublicacionCreateOrConnectWithoutVendedorInput[]
    createMany?: PublicacionCreateManyVendedorInputEnvelope
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
  }

  export type BusquedaGuardadaCreateNestedManyWithoutCompradorInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutCompradorInput, BusquedaGuardadaUncheckedCreateWithoutCompradorInput> | BusquedaGuardadaCreateWithoutCompradorInput[] | BusquedaGuardadaUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutCompradorInput | BusquedaGuardadaCreateOrConnectWithoutCompradorInput[]
    createMany?: BusquedaGuardadaCreateManyCompradorInputEnvelope
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
  }

  export type ConversacionCreateNestedManyWithoutCompradorInput = {
    create?: XOR<ConversacionCreateWithoutCompradorInput, ConversacionUncheckedCreateWithoutCompradorInput> | ConversacionCreateWithoutCompradorInput[] | ConversacionUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutCompradorInput | ConversacionCreateOrConnectWithoutCompradorInput[]
    createMany?: ConversacionCreateManyCompradorInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type ConversacionCreateNestedManyWithoutVendedorInput = {
    create?: XOR<ConversacionCreateWithoutVendedorInput, ConversacionUncheckedCreateWithoutVendedorInput> | ConversacionCreateWithoutVendedorInput[] | ConversacionUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutVendedorInput | ConversacionCreateOrConnectWithoutVendedorInput[]
    createMany?: ConversacionCreateManyVendedorInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type MensajeCreateNestedManyWithoutEmisorInput = {
    create?: XOR<MensajeCreateWithoutEmisorInput, MensajeUncheckedCreateWithoutEmisorInput> | MensajeCreateWithoutEmisorInput[] | MensajeUncheckedCreateWithoutEmisorInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutEmisorInput | MensajeCreateOrConnectWithoutEmisorInput[]
    createMany?: MensajeCreateManyEmisorInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type PublicacionUncheckedCreateNestedManyWithoutVendedorInput = {
    create?: XOR<PublicacionCreateWithoutVendedorInput, PublicacionUncheckedCreateWithoutVendedorInput> | PublicacionCreateWithoutVendedorInput[] | PublicacionUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutVendedorInput | PublicacionCreateOrConnectWithoutVendedorInput[]
    createMany?: PublicacionCreateManyVendedorInputEnvelope
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
  }

  export type BusquedaGuardadaUncheckedCreateNestedManyWithoutCompradorInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutCompradorInput, BusquedaGuardadaUncheckedCreateWithoutCompradorInput> | BusquedaGuardadaCreateWithoutCompradorInput[] | BusquedaGuardadaUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutCompradorInput | BusquedaGuardadaCreateOrConnectWithoutCompradorInput[]
    createMany?: BusquedaGuardadaCreateManyCompradorInputEnvelope
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
  }

  export type ConversacionUncheckedCreateNestedManyWithoutCompradorInput = {
    create?: XOR<ConversacionCreateWithoutCompradorInput, ConversacionUncheckedCreateWithoutCompradorInput> | ConversacionCreateWithoutCompradorInput[] | ConversacionUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutCompradorInput | ConversacionCreateOrConnectWithoutCompradorInput[]
    createMany?: ConversacionCreateManyCompradorInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type ConversacionUncheckedCreateNestedManyWithoutVendedorInput = {
    create?: XOR<ConversacionCreateWithoutVendedorInput, ConversacionUncheckedCreateWithoutVendedorInput> | ConversacionCreateWithoutVendedorInput[] | ConversacionUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutVendedorInput | ConversacionCreateOrConnectWithoutVendedorInput[]
    createMany?: ConversacionCreateManyVendedorInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutEmisorInput = {
    create?: XOR<MensajeCreateWithoutEmisorInput, MensajeUncheckedCreateWithoutEmisorInput> | MensajeCreateWithoutEmisorInput[] | MensajeUncheckedCreateWithoutEmisorInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutEmisorInput | MensajeCreateOrConnectWithoutEmisorInput[]
    createMany?: MensajeCreateManyEmisorInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PublicacionUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<PublicacionCreateWithoutVendedorInput, PublicacionUncheckedCreateWithoutVendedorInput> | PublicacionCreateWithoutVendedorInput[] | PublicacionUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutVendedorInput | PublicacionCreateOrConnectWithoutVendedorInput[]
    upsert?: PublicacionUpsertWithWhereUniqueWithoutVendedorInput | PublicacionUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: PublicacionCreateManyVendedorInputEnvelope
    set?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    disconnect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    delete?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    update?: PublicacionUpdateWithWhereUniqueWithoutVendedorInput | PublicacionUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: PublicacionUpdateManyWithWhereWithoutVendedorInput | PublicacionUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: PublicacionScalarWhereInput | PublicacionScalarWhereInput[]
  }

  export type BusquedaGuardadaUpdateManyWithoutCompradorNestedInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutCompradorInput, BusquedaGuardadaUncheckedCreateWithoutCompradorInput> | BusquedaGuardadaCreateWithoutCompradorInput[] | BusquedaGuardadaUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutCompradorInput | BusquedaGuardadaCreateOrConnectWithoutCompradorInput[]
    upsert?: BusquedaGuardadaUpsertWithWhereUniqueWithoutCompradorInput | BusquedaGuardadaUpsertWithWhereUniqueWithoutCompradorInput[]
    createMany?: BusquedaGuardadaCreateManyCompradorInputEnvelope
    set?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    disconnect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    delete?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    update?: BusquedaGuardadaUpdateWithWhereUniqueWithoutCompradorInput | BusquedaGuardadaUpdateWithWhereUniqueWithoutCompradorInput[]
    updateMany?: BusquedaGuardadaUpdateManyWithWhereWithoutCompradorInput | BusquedaGuardadaUpdateManyWithWhereWithoutCompradorInput[]
    deleteMany?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
  }

  export type ConversacionUpdateManyWithoutCompradorNestedInput = {
    create?: XOR<ConversacionCreateWithoutCompradorInput, ConversacionUncheckedCreateWithoutCompradorInput> | ConversacionCreateWithoutCompradorInput[] | ConversacionUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutCompradorInput | ConversacionCreateOrConnectWithoutCompradorInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutCompradorInput | ConversacionUpsertWithWhereUniqueWithoutCompradorInput[]
    createMany?: ConversacionCreateManyCompradorInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutCompradorInput | ConversacionUpdateWithWhereUniqueWithoutCompradorInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutCompradorInput | ConversacionUpdateManyWithWhereWithoutCompradorInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
  }

  export type ConversacionUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<ConversacionCreateWithoutVendedorInput, ConversacionUncheckedCreateWithoutVendedorInput> | ConversacionCreateWithoutVendedorInput[] | ConversacionUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutVendedorInput | ConversacionCreateOrConnectWithoutVendedorInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutVendedorInput | ConversacionUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: ConversacionCreateManyVendedorInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutVendedorInput | ConversacionUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutVendedorInput | ConversacionUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
  }

  export type MensajeUpdateManyWithoutEmisorNestedInput = {
    create?: XOR<MensajeCreateWithoutEmisorInput, MensajeUncheckedCreateWithoutEmisorInput> | MensajeCreateWithoutEmisorInput[] | MensajeUncheckedCreateWithoutEmisorInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutEmisorInput | MensajeCreateOrConnectWithoutEmisorInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutEmisorInput | MensajeUpsertWithWhereUniqueWithoutEmisorInput[]
    createMany?: MensajeCreateManyEmisorInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutEmisorInput | MensajeUpdateWithWhereUniqueWithoutEmisorInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutEmisorInput | MensajeUpdateManyWithWhereWithoutEmisorInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PublicacionUncheckedUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<PublicacionCreateWithoutVendedorInput, PublicacionUncheckedCreateWithoutVendedorInput> | PublicacionCreateWithoutVendedorInput[] | PublicacionUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutVendedorInput | PublicacionCreateOrConnectWithoutVendedorInput[]
    upsert?: PublicacionUpsertWithWhereUniqueWithoutVendedorInput | PublicacionUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: PublicacionCreateManyVendedorInputEnvelope
    set?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    disconnect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    delete?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    update?: PublicacionUpdateWithWhereUniqueWithoutVendedorInput | PublicacionUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: PublicacionUpdateManyWithWhereWithoutVendedorInput | PublicacionUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: PublicacionScalarWhereInput | PublicacionScalarWhereInput[]
  }

  export type BusquedaGuardadaUncheckedUpdateManyWithoutCompradorNestedInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutCompradorInput, BusquedaGuardadaUncheckedCreateWithoutCompradorInput> | BusquedaGuardadaCreateWithoutCompradorInput[] | BusquedaGuardadaUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutCompradorInput | BusquedaGuardadaCreateOrConnectWithoutCompradorInput[]
    upsert?: BusquedaGuardadaUpsertWithWhereUniqueWithoutCompradorInput | BusquedaGuardadaUpsertWithWhereUniqueWithoutCompradorInput[]
    createMany?: BusquedaGuardadaCreateManyCompradorInputEnvelope
    set?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    disconnect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    delete?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    update?: BusquedaGuardadaUpdateWithWhereUniqueWithoutCompradorInput | BusquedaGuardadaUpdateWithWhereUniqueWithoutCompradorInput[]
    updateMany?: BusquedaGuardadaUpdateManyWithWhereWithoutCompradorInput | BusquedaGuardadaUpdateManyWithWhereWithoutCompradorInput[]
    deleteMany?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
  }

  export type ConversacionUncheckedUpdateManyWithoutCompradorNestedInput = {
    create?: XOR<ConversacionCreateWithoutCompradorInput, ConversacionUncheckedCreateWithoutCompradorInput> | ConversacionCreateWithoutCompradorInput[] | ConversacionUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutCompradorInput | ConversacionCreateOrConnectWithoutCompradorInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutCompradorInput | ConversacionUpsertWithWhereUniqueWithoutCompradorInput[]
    createMany?: ConversacionCreateManyCompradorInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutCompradorInput | ConversacionUpdateWithWhereUniqueWithoutCompradorInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutCompradorInput | ConversacionUpdateManyWithWhereWithoutCompradorInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
  }

  export type ConversacionUncheckedUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<ConversacionCreateWithoutVendedorInput, ConversacionUncheckedCreateWithoutVendedorInput> | ConversacionCreateWithoutVendedorInput[] | ConversacionUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutVendedorInput | ConversacionCreateOrConnectWithoutVendedorInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutVendedorInput | ConversacionUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: ConversacionCreateManyVendedorInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutVendedorInput | ConversacionUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutVendedorInput | ConversacionUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
  }

  export type MensajeUncheckedUpdateManyWithoutEmisorNestedInput = {
    create?: XOR<MensajeCreateWithoutEmisorInput, MensajeUncheckedCreateWithoutEmisorInput> | MensajeCreateWithoutEmisorInput[] | MensajeUncheckedCreateWithoutEmisorInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutEmisorInput | MensajeCreateOrConnectWithoutEmisorInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutEmisorInput | MensajeUpsertWithWhereUniqueWithoutEmisorInput[]
    createMany?: MensajeCreateManyEmisorInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutEmisorInput | MensajeUpdateWithWhereUniqueWithoutEmisorInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutEmisorInput | MensajeUpdateManyWithWhereWithoutEmisorInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutSubcategoriasInput = {
    create?: XOR<CategoriaCreateWithoutSubcategoriasInput, CategoriaUncheckedCreateWithoutSubcategoriasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutSubcategoriasInput
    connect?: CategoriaWhereUniqueInput
  }

  export type CategoriaCreateNestedManyWithoutCategoriaPadreInput = {
    create?: XOR<CategoriaCreateWithoutCategoriaPadreInput, CategoriaUncheckedCreateWithoutCategoriaPadreInput> | CategoriaCreateWithoutCategoriaPadreInput[] | CategoriaUncheckedCreateWithoutCategoriaPadreInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutCategoriaPadreInput | CategoriaCreateOrConnectWithoutCategoriaPadreInput[]
    createMany?: CategoriaCreateManyCategoriaPadreInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type PublicacionCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PublicacionCreateWithoutCategoriaInput, PublicacionUncheckedCreateWithoutCategoriaInput> | PublicacionCreateWithoutCategoriaInput[] | PublicacionUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutCategoriaInput | PublicacionCreateOrConnectWithoutCategoriaInput[]
    createMany?: PublicacionCreateManyCategoriaInputEnvelope
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
  }

  export type BusquedaGuardadaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutCategoriaInput, BusquedaGuardadaUncheckedCreateWithoutCategoriaInput> | BusquedaGuardadaCreateWithoutCategoriaInput[] | BusquedaGuardadaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutCategoriaInput | BusquedaGuardadaCreateOrConnectWithoutCategoriaInput[]
    createMany?: BusquedaGuardadaCreateManyCategoriaInputEnvelope
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
  }

  export type CategoriaUncheckedCreateNestedManyWithoutCategoriaPadreInput = {
    create?: XOR<CategoriaCreateWithoutCategoriaPadreInput, CategoriaUncheckedCreateWithoutCategoriaPadreInput> | CategoriaCreateWithoutCategoriaPadreInput[] | CategoriaUncheckedCreateWithoutCategoriaPadreInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutCategoriaPadreInput | CategoriaCreateOrConnectWithoutCategoriaPadreInput[]
    createMany?: CategoriaCreateManyCategoriaPadreInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type PublicacionUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PublicacionCreateWithoutCategoriaInput, PublicacionUncheckedCreateWithoutCategoriaInput> | PublicacionCreateWithoutCategoriaInput[] | PublicacionUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutCategoriaInput | PublicacionCreateOrConnectWithoutCategoriaInput[]
    createMany?: PublicacionCreateManyCategoriaInputEnvelope
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
  }

  export type BusquedaGuardadaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutCategoriaInput, BusquedaGuardadaUncheckedCreateWithoutCategoriaInput> | BusquedaGuardadaCreateWithoutCategoriaInput[] | BusquedaGuardadaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutCategoriaInput | BusquedaGuardadaCreateOrConnectWithoutCategoriaInput[]
    createMany?: BusquedaGuardadaCreateManyCategoriaInputEnvelope
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
  }

  export type CategoriaUpdateOneWithoutSubcategoriasNestedInput = {
    create?: XOR<CategoriaCreateWithoutSubcategoriasInput, CategoriaUncheckedCreateWithoutSubcategoriasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutSubcategoriasInput
    upsert?: CategoriaUpsertWithoutSubcategoriasInput
    disconnect?: CategoriaWhereInput | boolean
    delete?: CategoriaWhereInput | boolean
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutSubcategoriasInput, CategoriaUpdateWithoutSubcategoriasInput>, CategoriaUncheckedUpdateWithoutSubcategoriasInput>
  }

  export type CategoriaUpdateManyWithoutCategoriaPadreNestedInput = {
    create?: XOR<CategoriaCreateWithoutCategoriaPadreInput, CategoriaUncheckedCreateWithoutCategoriaPadreInput> | CategoriaCreateWithoutCategoriaPadreInput[] | CategoriaUncheckedCreateWithoutCategoriaPadreInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutCategoriaPadreInput | CategoriaCreateOrConnectWithoutCategoriaPadreInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutCategoriaPadreInput | CategoriaUpsertWithWhereUniqueWithoutCategoriaPadreInput[]
    createMany?: CategoriaCreateManyCategoriaPadreInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutCategoriaPadreInput | CategoriaUpdateWithWhereUniqueWithoutCategoriaPadreInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutCategoriaPadreInput | CategoriaUpdateManyWithWhereWithoutCategoriaPadreInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type PublicacionUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PublicacionCreateWithoutCategoriaInput, PublicacionUncheckedCreateWithoutCategoriaInput> | PublicacionCreateWithoutCategoriaInput[] | PublicacionUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutCategoriaInput | PublicacionCreateOrConnectWithoutCategoriaInput[]
    upsert?: PublicacionUpsertWithWhereUniqueWithoutCategoriaInput | PublicacionUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PublicacionCreateManyCategoriaInputEnvelope
    set?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    disconnect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    delete?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    update?: PublicacionUpdateWithWhereUniqueWithoutCategoriaInput | PublicacionUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PublicacionUpdateManyWithWhereWithoutCategoriaInput | PublicacionUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PublicacionScalarWhereInput | PublicacionScalarWhereInput[]
  }

  export type BusquedaGuardadaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutCategoriaInput, BusquedaGuardadaUncheckedCreateWithoutCategoriaInput> | BusquedaGuardadaCreateWithoutCategoriaInput[] | BusquedaGuardadaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutCategoriaInput | BusquedaGuardadaCreateOrConnectWithoutCategoriaInput[]
    upsert?: BusquedaGuardadaUpsertWithWhereUniqueWithoutCategoriaInput | BusquedaGuardadaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: BusquedaGuardadaCreateManyCategoriaInputEnvelope
    set?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    disconnect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    delete?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    update?: BusquedaGuardadaUpdateWithWhereUniqueWithoutCategoriaInput | BusquedaGuardadaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: BusquedaGuardadaUpdateManyWithWhereWithoutCategoriaInput | BusquedaGuardadaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriaUncheckedUpdateManyWithoutCategoriaPadreNestedInput = {
    create?: XOR<CategoriaCreateWithoutCategoriaPadreInput, CategoriaUncheckedCreateWithoutCategoriaPadreInput> | CategoriaCreateWithoutCategoriaPadreInput[] | CategoriaUncheckedCreateWithoutCategoriaPadreInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutCategoriaPadreInput | CategoriaCreateOrConnectWithoutCategoriaPadreInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutCategoriaPadreInput | CategoriaUpsertWithWhereUniqueWithoutCategoriaPadreInput[]
    createMany?: CategoriaCreateManyCategoriaPadreInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutCategoriaPadreInput | CategoriaUpdateWithWhereUniqueWithoutCategoriaPadreInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutCategoriaPadreInput | CategoriaUpdateManyWithWhereWithoutCategoriaPadreInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type PublicacionUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PublicacionCreateWithoutCategoriaInput, PublicacionUncheckedCreateWithoutCategoriaInput> | PublicacionCreateWithoutCategoriaInput[] | PublicacionUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutCategoriaInput | PublicacionCreateOrConnectWithoutCategoriaInput[]
    upsert?: PublicacionUpsertWithWhereUniqueWithoutCategoriaInput | PublicacionUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PublicacionCreateManyCategoriaInputEnvelope
    set?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    disconnect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    delete?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    update?: PublicacionUpdateWithWhereUniqueWithoutCategoriaInput | PublicacionUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PublicacionUpdateManyWithWhereWithoutCategoriaInput | PublicacionUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PublicacionScalarWhereInput | PublicacionScalarWhereInput[]
  }

  export type BusquedaGuardadaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutCategoriaInput, BusquedaGuardadaUncheckedCreateWithoutCategoriaInput> | BusquedaGuardadaCreateWithoutCategoriaInput[] | BusquedaGuardadaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutCategoriaInput | BusquedaGuardadaCreateOrConnectWithoutCategoriaInput[]
    upsert?: BusquedaGuardadaUpsertWithWhereUniqueWithoutCategoriaInput | BusquedaGuardadaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: BusquedaGuardadaCreateManyCategoriaInputEnvelope
    set?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    disconnect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    delete?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    update?: BusquedaGuardadaUpdateWithWhereUniqueWithoutCategoriaInput | BusquedaGuardadaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: BusquedaGuardadaUpdateManyWithWhereWithoutCategoriaInput | BusquedaGuardadaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPublicacionesInput = {
    create?: XOR<UsuarioCreateWithoutPublicacionesInput, UsuarioUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPublicacionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutPublicacionesInput = {
    create?: XOR<CategoriaCreateWithoutPublicacionesInput, CategoriaUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPublicacionesInput
    connect?: CategoriaWhereUniqueInput
  }

  export type PublicacionFotoCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<PublicacionFotoCreateWithoutPublicacionInput, PublicacionFotoUncheckedCreateWithoutPublicacionInput> | PublicacionFotoCreateWithoutPublicacionInput[] | PublicacionFotoUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: PublicacionFotoCreateOrConnectWithoutPublicacionInput | PublicacionFotoCreateOrConnectWithoutPublicacionInput[]
    createMany?: PublicacionFotoCreateManyPublicacionInputEnvelope
    connect?: PublicacionFotoWhereUniqueInput | PublicacionFotoWhereUniqueInput[]
  }

  export type AlertaCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<AlertaCreateWithoutPublicacionInput, AlertaUncheckedCreateWithoutPublicacionInput> | AlertaCreateWithoutPublicacionInput[] | AlertaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutPublicacionInput | AlertaCreateOrConnectWithoutPublicacionInput[]
    createMany?: AlertaCreateManyPublicacionInputEnvelope
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
  }

  export type ConversacionCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<ConversacionCreateWithoutPublicacionInput, ConversacionUncheckedCreateWithoutPublicacionInput> | ConversacionCreateWithoutPublicacionInput[] | ConversacionUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutPublicacionInput | ConversacionCreateOrConnectWithoutPublicacionInput[]
    createMany?: ConversacionCreateManyPublicacionInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type ReporteCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<ReporteCreateWithoutPublicacionInput, ReporteUncheckedCreateWithoutPublicacionInput> | ReporteCreateWithoutPublicacionInput[] | ReporteUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutPublicacionInput | ReporteCreateOrConnectWithoutPublicacionInput[]
    createMany?: ReporteCreateManyPublicacionInputEnvelope
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
  }

  export type PublicacionFotoUncheckedCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<PublicacionFotoCreateWithoutPublicacionInput, PublicacionFotoUncheckedCreateWithoutPublicacionInput> | PublicacionFotoCreateWithoutPublicacionInput[] | PublicacionFotoUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: PublicacionFotoCreateOrConnectWithoutPublicacionInput | PublicacionFotoCreateOrConnectWithoutPublicacionInput[]
    createMany?: PublicacionFotoCreateManyPublicacionInputEnvelope
    connect?: PublicacionFotoWhereUniqueInput | PublicacionFotoWhereUniqueInput[]
  }

  export type AlertaUncheckedCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<AlertaCreateWithoutPublicacionInput, AlertaUncheckedCreateWithoutPublicacionInput> | AlertaCreateWithoutPublicacionInput[] | AlertaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutPublicacionInput | AlertaCreateOrConnectWithoutPublicacionInput[]
    createMany?: AlertaCreateManyPublicacionInputEnvelope
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
  }

  export type ConversacionUncheckedCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<ConversacionCreateWithoutPublicacionInput, ConversacionUncheckedCreateWithoutPublicacionInput> | ConversacionCreateWithoutPublicacionInput[] | ConversacionUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutPublicacionInput | ConversacionCreateOrConnectWithoutPublicacionInput[]
    createMany?: ConversacionCreateManyPublicacionInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type ReporteUncheckedCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<ReporteCreateWithoutPublicacionInput, ReporteUncheckedCreateWithoutPublicacionInput> | ReporteCreateWithoutPublicacionInput[] | ReporteUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutPublicacionInput | ReporteCreateOrConnectWithoutPublicacionInput[]
    createMany?: ReporteCreateManyPublicacionInputEnvelope
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutPublicacionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutPublicacionesInput, UsuarioUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPublicacionesInput
    upsert?: UsuarioUpsertWithoutPublicacionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPublicacionesInput, UsuarioUpdateWithoutPublicacionesInput>, UsuarioUncheckedUpdateWithoutPublicacionesInput>
  }

  export type CategoriaUpdateOneRequiredWithoutPublicacionesNestedInput = {
    create?: XOR<CategoriaCreateWithoutPublicacionesInput, CategoriaUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPublicacionesInput
    upsert?: CategoriaUpsertWithoutPublicacionesInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutPublicacionesInput, CategoriaUpdateWithoutPublicacionesInput>, CategoriaUncheckedUpdateWithoutPublicacionesInput>
  }

  export type PublicacionFotoUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<PublicacionFotoCreateWithoutPublicacionInput, PublicacionFotoUncheckedCreateWithoutPublicacionInput> | PublicacionFotoCreateWithoutPublicacionInput[] | PublicacionFotoUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: PublicacionFotoCreateOrConnectWithoutPublicacionInput | PublicacionFotoCreateOrConnectWithoutPublicacionInput[]
    upsert?: PublicacionFotoUpsertWithWhereUniqueWithoutPublicacionInput | PublicacionFotoUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: PublicacionFotoCreateManyPublicacionInputEnvelope
    set?: PublicacionFotoWhereUniqueInput | PublicacionFotoWhereUniqueInput[]
    disconnect?: PublicacionFotoWhereUniqueInput | PublicacionFotoWhereUniqueInput[]
    delete?: PublicacionFotoWhereUniqueInput | PublicacionFotoWhereUniqueInput[]
    connect?: PublicacionFotoWhereUniqueInput | PublicacionFotoWhereUniqueInput[]
    update?: PublicacionFotoUpdateWithWhereUniqueWithoutPublicacionInput | PublicacionFotoUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: PublicacionFotoUpdateManyWithWhereWithoutPublicacionInput | PublicacionFotoUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: PublicacionFotoScalarWhereInput | PublicacionFotoScalarWhereInput[]
  }

  export type AlertaUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<AlertaCreateWithoutPublicacionInput, AlertaUncheckedCreateWithoutPublicacionInput> | AlertaCreateWithoutPublicacionInput[] | AlertaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutPublicacionInput | AlertaCreateOrConnectWithoutPublicacionInput[]
    upsert?: AlertaUpsertWithWhereUniqueWithoutPublicacionInput | AlertaUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: AlertaCreateManyPublicacionInputEnvelope
    set?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    disconnect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    delete?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    update?: AlertaUpdateWithWhereUniqueWithoutPublicacionInput | AlertaUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: AlertaUpdateManyWithWhereWithoutPublicacionInput | AlertaUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
  }

  export type ConversacionUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<ConversacionCreateWithoutPublicacionInput, ConversacionUncheckedCreateWithoutPublicacionInput> | ConversacionCreateWithoutPublicacionInput[] | ConversacionUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutPublicacionInput | ConversacionCreateOrConnectWithoutPublicacionInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutPublicacionInput | ConversacionUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: ConversacionCreateManyPublicacionInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutPublicacionInput | ConversacionUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutPublicacionInput | ConversacionUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
  }

  export type ReporteUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<ReporteCreateWithoutPublicacionInput, ReporteUncheckedCreateWithoutPublicacionInput> | ReporteCreateWithoutPublicacionInput[] | ReporteUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutPublicacionInput | ReporteCreateOrConnectWithoutPublicacionInput[]
    upsert?: ReporteUpsertWithWhereUniqueWithoutPublicacionInput | ReporteUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: ReporteCreateManyPublicacionInputEnvelope
    set?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    disconnect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    delete?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    update?: ReporteUpdateWithWhereUniqueWithoutPublicacionInput | ReporteUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: ReporteUpdateManyWithWhereWithoutPublicacionInput | ReporteUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
  }

  export type PublicacionFotoUncheckedUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<PublicacionFotoCreateWithoutPublicacionInput, PublicacionFotoUncheckedCreateWithoutPublicacionInput> | PublicacionFotoCreateWithoutPublicacionInput[] | PublicacionFotoUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: PublicacionFotoCreateOrConnectWithoutPublicacionInput | PublicacionFotoCreateOrConnectWithoutPublicacionInput[]
    upsert?: PublicacionFotoUpsertWithWhereUniqueWithoutPublicacionInput | PublicacionFotoUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: PublicacionFotoCreateManyPublicacionInputEnvelope
    set?: PublicacionFotoWhereUniqueInput | PublicacionFotoWhereUniqueInput[]
    disconnect?: PublicacionFotoWhereUniqueInput | PublicacionFotoWhereUniqueInput[]
    delete?: PublicacionFotoWhereUniqueInput | PublicacionFotoWhereUniqueInput[]
    connect?: PublicacionFotoWhereUniqueInput | PublicacionFotoWhereUniqueInput[]
    update?: PublicacionFotoUpdateWithWhereUniqueWithoutPublicacionInput | PublicacionFotoUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: PublicacionFotoUpdateManyWithWhereWithoutPublicacionInput | PublicacionFotoUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: PublicacionFotoScalarWhereInput | PublicacionFotoScalarWhereInput[]
  }

  export type AlertaUncheckedUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<AlertaCreateWithoutPublicacionInput, AlertaUncheckedCreateWithoutPublicacionInput> | AlertaCreateWithoutPublicacionInput[] | AlertaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutPublicacionInput | AlertaCreateOrConnectWithoutPublicacionInput[]
    upsert?: AlertaUpsertWithWhereUniqueWithoutPublicacionInput | AlertaUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: AlertaCreateManyPublicacionInputEnvelope
    set?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    disconnect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    delete?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    update?: AlertaUpdateWithWhereUniqueWithoutPublicacionInput | AlertaUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: AlertaUpdateManyWithWhereWithoutPublicacionInput | AlertaUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
  }

  export type ConversacionUncheckedUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<ConversacionCreateWithoutPublicacionInput, ConversacionUncheckedCreateWithoutPublicacionInput> | ConversacionCreateWithoutPublicacionInput[] | ConversacionUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutPublicacionInput | ConversacionCreateOrConnectWithoutPublicacionInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutPublicacionInput | ConversacionUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: ConversacionCreateManyPublicacionInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutPublicacionInput | ConversacionUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutPublicacionInput | ConversacionUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
  }

  export type ReporteUncheckedUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<ReporteCreateWithoutPublicacionInput, ReporteUncheckedCreateWithoutPublicacionInput> | ReporteCreateWithoutPublicacionInput[] | ReporteUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutPublicacionInput | ReporteCreateOrConnectWithoutPublicacionInput[]
    upsert?: ReporteUpsertWithWhereUniqueWithoutPublicacionInput | ReporteUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: ReporteCreateManyPublicacionInputEnvelope
    set?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    disconnect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    delete?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    update?: ReporteUpdateWithWhereUniqueWithoutPublicacionInput | ReporteUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: ReporteUpdateManyWithWhereWithoutPublicacionInput | ReporteUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
  }

  export type PublicacionCreateNestedOneWithoutFotosInput = {
    create?: XOR<PublicacionCreateWithoutFotosInput, PublicacionUncheckedCreateWithoutFotosInput>
    connectOrCreate?: PublicacionCreateOrConnectWithoutFotosInput
    connect?: PublicacionWhereUniqueInput
  }

  export type PublicacionUpdateOneRequiredWithoutFotosNestedInput = {
    create?: XOR<PublicacionCreateWithoutFotosInput, PublicacionUncheckedCreateWithoutFotosInput>
    connectOrCreate?: PublicacionCreateOrConnectWithoutFotosInput
    upsert?: PublicacionUpsertWithoutFotosInput
    connect?: PublicacionWhereUniqueInput
    update?: XOR<XOR<PublicacionUpdateToOneWithWhereWithoutFotosInput, PublicacionUpdateWithoutFotosInput>, PublicacionUncheckedUpdateWithoutFotosInput>
  }

  export type UsuarioCreateNestedOneWithoutBusquedasGuardadasInput = {
    create?: XOR<UsuarioCreateWithoutBusquedasGuardadasInput, UsuarioUncheckedCreateWithoutBusquedasGuardadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBusquedasGuardadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutBusquedasGuardadasInput = {
    create?: XOR<CategoriaCreateWithoutBusquedasGuardadasInput, CategoriaUncheckedCreateWithoutBusquedasGuardadasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutBusquedasGuardadasInput
    connect?: CategoriaWhereUniqueInput
  }

  export type AlertaCreateNestedManyWithoutBusquedaInput = {
    create?: XOR<AlertaCreateWithoutBusquedaInput, AlertaUncheckedCreateWithoutBusquedaInput> | AlertaCreateWithoutBusquedaInput[] | AlertaUncheckedCreateWithoutBusquedaInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutBusquedaInput | AlertaCreateOrConnectWithoutBusquedaInput[]
    createMany?: AlertaCreateManyBusquedaInputEnvelope
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
  }

  export type AlertaUncheckedCreateNestedManyWithoutBusquedaInput = {
    create?: XOR<AlertaCreateWithoutBusquedaInput, AlertaUncheckedCreateWithoutBusquedaInput> | AlertaCreateWithoutBusquedaInput[] | AlertaUncheckedCreateWithoutBusquedaInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutBusquedaInput | AlertaCreateOrConnectWithoutBusquedaInput[]
    createMany?: AlertaCreateManyBusquedaInputEnvelope
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutBusquedasGuardadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutBusquedasGuardadasInput, UsuarioUncheckedCreateWithoutBusquedasGuardadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBusquedasGuardadasInput
    upsert?: UsuarioUpsertWithoutBusquedasGuardadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutBusquedasGuardadasInput, UsuarioUpdateWithoutBusquedasGuardadasInput>, UsuarioUncheckedUpdateWithoutBusquedasGuardadasInput>
  }

  export type CategoriaUpdateOneRequiredWithoutBusquedasGuardadasNestedInput = {
    create?: XOR<CategoriaCreateWithoutBusquedasGuardadasInput, CategoriaUncheckedCreateWithoutBusquedasGuardadasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutBusquedasGuardadasInput
    upsert?: CategoriaUpsertWithoutBusquedasGuardadasInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutBusquedasGuardadasInput, CategoriaUpdateWithoutBusquedasGuardadasInput>, CategoriaUncheckedUpdateWithoutBusquedasGuardadasInput>
  }

  export type AlertaUpdateManyWithoutBusquedaNestedInput = {
    create?: XOR<AlertaCreateWithoutBusquedaInput, AlertaUncheckedCreateWithoutBusquedaInput> | AlertaCreateWithoutBusquedaInput[] | AlertaUncheckedCreateWithoutBusquedaInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutBusquedaInput | AlertaCreateOrConnectWithoutBusquedaInput[]
    upsert?: AlertaUpsertWithWhereUniqueWithoutBusquedaInput | AlertaUpsertWithWhereUniqueWithoutBusquedaInput[]
    createMany?: AlertaCreateManyBusquedaInputEnvelope
    set?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    disconnect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    delete?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    update?: AlertaUpdateWithWhereUniqueWithoutBusquedaInput | AlertaUpdateWithWhereUniqueWithoutBusquedaInput[]
    updateMany?: AlertaUpdateManyWithWhereWithoutBusquedaInput | AlertaUpdateManyWithWhereWithoutBusquedaInput[]
    deleteMany?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
  }

  export type AlertaUncheckedUpdateManyWithoutBusquedaNestedInput = {
    create?: XOR<AlertaCreateWithoutBusquedaInput, AlertaUncheckedCreateWithoutBusquedaInput> | AlertaCreateWithoutBusquedaInput[] | AlertaUncheckedCreateWithoutBusquedaInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutBusquedaInput | AlertaCreateOrConnectWithoutBusquedaInput[]
    upsert?: AlertaUpsertWithWhereUniqueWithoutBusquedaInput | AlertaUpsertWithWhereUniqueWithoutBusquedaInput[]
    createMany?: AlertaCreateManyBusquedaInputEnvelope
    set?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    disconnect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    delete?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    update?: AlertaUpdateWithWhereUniqueWithoutBusquedaInput | AlertaUpdateWithWhereUniqueWithoutBusquedaInput[]
    updateMany?: AlertaUpdateManyWithWhereWithoutBusquedaInput | AlertaUpdateManyWithWhereWithoutBusquedaInput[]
    deleteMany?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
  }

  export type BusquedaGuardadaCreateNestedOneWithoutAlertasInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutAlertasInput, BusquedaGuardadaUncheckedCreateWithoutAlertasInput>
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutAlertasInput
    connect?: BusquedaGuardadaWhereUniqueInput
  }

  export type PublicacionCreateNestedOneWithoutAlertasInput = {
    create?: XOR<PublicacionCreateWithoutAlertasInput, PublicacionUncheckedCreateWithoutAlertasInput>
    connectOrCreate?: PublicacionCreateOrConnectWithoutAlertasInput
    connect?: PublicacionWhereUniqueInput
  }

  export type BusquedaGuardadaUpdateOneRequiredWithoutAlertasNestedInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutAlertasInput, BusquedaGuardadaUncheckedCreateWithoutAlertasInput>
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutAlertasInput
    upsert?: BusquedaGuardadaUpsertWithoutAlertasInput
    connect?: BusquedaGuardadaWhereUniqueInput
    update?: XOR<XOR<BusquedaGuardadaUpdateToOneWithWhereWithoutAlertasInput, BusquedaGuardadaUpdateWithoutAlertasInput>, BusquedaGuardadaUncheckedUpdateWithoutAlertasInput>
  }

  export type PublicacionUpdateOneRequiredWithoutAlertasNestedInput = {
    create?: XOR<PublicacionCreateWithoutAlertasInput, PublicacionUncheckedCreateWithoutAlertasInput>
    connectOrCreate?: PublicacionCreateOrConnectWithoutAlertasInput
    upsert?: PublicacionUpsertWithoutAlertasInput
    connect?: PublicacionWhereUniqueInput
    update?: XOR<XOR<PublicacionUpdateToOneWithWhereWithoutAlertasInput, PublicacionUpdateWithoutAlertasInput>, PublicacionUncheckedUpdateWithoutAlertasInput>
  }

  export type PublicacionCreateNestedOneWithoutConversacionesInput = {
    create?: XOR<PublicacionCreateWithoutConversacionesInput, PublicacionUncheckedCreateWithoutConversacionesInput>
    connectOrCreate?: PublicacionCreateOrConnectWithoutConversacionesInput
    connect?: PublicacionWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutConversacionesComoCompradorInput = {
    create?: XOR<UsuarioCreateWithoutConversacionesComoCompradorInput, UsuarioUncheckedCreateWithoutConversacionesComoCompradorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConversacionesComoCompradorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutConversacionesComoVendedorInput = {
    create?: XOR<UsuarioCreateWithoutConversacionesComoVendedorInput, UsuarioUncheckedCreateWithoutConversacionesComoVendedorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConversacionesComoVendedorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MensajeCreateNestedManyWithoutConversacionInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutConversacionInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type PublicacionUpdateOneRequiredWithoutConversacionesNestedInput = {
    create?: XOR<PublicacionCreateWithoutConversacionesInput, PublicacionUncheckedCreateWithoutConversacionesInput>
    connectOrCreate?: PublicacionCreateOrConnectWithoutConversacionesInput
    upsert?: PublicacionUpsertWithoutConversacionesInput
    connect?: PublicacionWhereUniqueInput
    update?: XOR<XOR<PublicacionUpdateToOneWithWhereWithoutConversacionesInput, PublicacionUpdateWithoutConversacionesInput>, PublicacionUncheckedUpdateWithoutConversacionesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutConversacionesComoCompradorNestedInput = {
    create?: XOR<UsuarioCreateWithoutConversacionesComoCompradorInput, UsuarioUncheckedCreateWithoutConversacionesComoCompradorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConversacionesComoCompradorInput
    upsert?: UsuarioUpsertWithoutConversacionesComoCompradorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutConversacionesComoCompradorInput, UsuarioUpdateWithoutConversacionesComoCompradorInput>, UsuarioUncheckedUpdateWithoutConversacionesComoCompradorInput>
  }

  export type UsuarioUpdateOneRequiredWithoutConversacionesComoVendedorNestedInput = {
    create?: XOR<UsuarioCreateWithoutConversacionesComoVendedorInput, UsuarioUncheckedCreateWithoutConversacionesComoVendedorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConversacionesComoVendedorInput
    upsert?: UsuarioUpsertWithoutConversacionesComoVendedorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutConversacionesComoVendedorInput, UsuarioUpdateWithoutConversacionesComoVendedorInput>, UsuarioUncheckedUpdateWithoutConversacionesComoVendedorInput>
  }

  export type MensajeUpdateManyWithoutConversacionNestedInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutConversacionInput | MensajeUpsertWithWhereUniqueWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutConversacionInput | MensajeUpdateWithWhereUniqueWithoutConversacionInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutConversacionInput | MensajeUpdateManyWithWhereWithoutConversacionInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type MensajeUncheckedUpdateManyWithoutConversacionNestedInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutConversacionInput | MensajeUpsertWithWhereUniqueWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutConversacionInput | MensajeUpdateWithWhereUniqueWithoutConversacionInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutConversacionInput | MensajeUpdateManyWithWhereWithoutConversacionInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type ConversacionCreateNestedOneWithoutMensajesInput = {
    create?: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: ConversacionCreateOrConnectWithoutMensajesInput
    connect?: ConversacionWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMensajesInput = {
    create?: XOR<UsuarioCreateWithoutMensajesInput, UsuarioUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ConversacionUpdateOneRequiredWithoutMensajesNestedInput = {
    create?: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: ConversacionCreateOrConnectWithoutMensajesInput
    upsert?: ConversacionUpsertWithoutMensajesInput
    connect?: ConversacionWhereUniqueInput
    update?: XOR<XOR<ConversacionUpdateToOneWithWhereWithoutMensajesInput, ConversacionUpdateWithoutMensajesInput>, ConversacionUncheckedUpdateWithoutMensajesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutMensajesNestedInput = {
    create?: XOR<UsuarioCreateWithoutMensajesInput, UsuarioUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesInput
    upsert?: UsuarioUpsertWithoutMensajesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMensajesInput, UsuarioUpdateWithoutMensajesInput>, UsuarioUncheckedUpdateWithoutMensajesInput>
  }

  export type PublicacionCreateNestedOneWithoutReportesInput = {
    create?: XOR<PublicacionCreateWithoutReportesInput, PublicacionUncheckedCreateWithoutReportesInput>
    connectOrCreate?: PublicacionCreateOrConnectWithoutReportesInput
    connect?: PublicacionWhereUniqueInput
  }

  export type PublicacionUpdateOneRequiredWithoutReportesNestedInput = {
    create?: XOR<PublicacionCreateWithoutReportesInput, PublicacionUncheckedCreateWithoutReportesInput>
    connectOrCreate?: PublicacionCreateOrConnectWithoutReportesInput
    upsert?: PublicacionUpsertWithoutReportesInput
    connect?: PublicacionWhereUniqueInput
    update?: XOR<XOR<PublicacionUpdateToOneWithWhereWithoutReportesInput, PublicacionUpdateWithoutReportesInput>, PublicacionUncheckedUpdateWithoutReportesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PublicacionCreateWithoutVendedorInput = {
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    categoria: CategoriaCreateNestedOneWithoutPublicacionesInput
    fotos?: PublicacionFotoCreateNestedManyWithoutPublicacionInput
    alertas?: AlertaCreateNestedManyWithoutPublicacionInput
    conversaciones?: ConversacionCreateNestedManyWithoutPublicacionInput
    reportes?: ReporteCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionUncheckedCreateWithoutVendedorInput = {
    id?: number
    categoriaId: number
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    fotos?: PublicacionFotoUncheckedCreateNestedManyWithoutPublicacionInput
    alertas?: AlertaUncheckedCreateNestedManyWithoutPublicacionInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPublicacionInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionCreateOrConnectWithoutVendedorInput = {
    where: PublicacionWhereUniqueInput
    create: XOR<PublicacionCreateWithoutVendedorInput, PublicacionUncheckedCreateWithoutVendedorInput>
  }

  export type PublicacionCreateManyVendedorInputEnvelope = {
    data: PublicacionCreateManyVendedorInput | PublicacionCreateManyVendedorInput[]
  }

  export type BusquedaGuardadaCreateWithoutCompradorInput = {
    palabrasClave?: string | null
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo?: number | null
    activa?: boolean
    creadoEn?: Date | string
    categoria: CategoriaCreateNestedOneWithoutBusquedasGuardadasInput
    alertas?: AlertaCreateNestedManyWithoutBusquedaInput
  }

  export type BusquedaGuardadaUncheckedCreateWithoutCompradorInput = {
    id?: number
    categoriaId: number
    palabrasClave?: string | null
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo?: number | null
    activa?: boolean
    creadoEn?: Date | string
    alertas?: AlertaUncheckedCreateNestedManyWithoutBusquedaInput
  }

  export type BusquedaGuardadaCreateOrConnectWithoutCompradorInput = {
    where: BusquedaGuardadaWhereUniqueInput
    create: XOR<BusquedaGuardadaCreateWithoutCompradorInput, BusquedaGuardadaUncheckedCreateWithoutCompradorInput>
  }

  export type BusquedaGuardadaCreateManyCompradorInputEnvelope = {
    data: BusquedaGuardadaCreateManyCompradorInput | BusquedaGuardadaCreateManyCompradorInput[]
  }

  export type ConversacionCreateWithoutCompradorInput = {
    telefonoRevelado?: boolean
    creadoEn?: Date | string
    publicacion: PublicacionCreateNestedOneWithoutConversacionesInput
    vendedor: UsuarioCreateNestedOneWithoutConversacionesComoVendedorInput
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateWithoutCompradorInput = {
    id?: number
    publicacionId: number
    vendedorId: number
    telefonoRevelado?: boolean
    creadoEn?: Date | string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionCreateOrConnectWithoutCompradorInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutCompradorInput, ConversacionUncheckedCreateWithoutCompradorInput>
  }

  export type ConversacionCreateManyCompradorInputEnvelope = {
    data: ConversacionCreateManyCompradorInput | ConversacionCreateManyCompradorInput[]
  }

  export type ConversacionCreateWithoutVendedorInput = {
    telefonoRevelado?: boolean
    creadoEn?: Date | string
    publicacion: PublicacionCreateNestedOneWithoutConversacionesInput
    comprador: UsuarioCreateNestedOneWithoutConversacionesComoCompradorInput
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateWithoutVendedorInput = {
    id?: number
    publicacionId: number
    compradorId: number
    telefonoRevelado?: boolean
    creadoEn?: Date | string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionCreateOrConnectWithoutVendedorInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutVendedorInput, ConversacionUncheckedCreateWithoutVendedorInput>
  }

  export type ConversacionCreateManyVendedorInputEnvelope = {
    data: ConversacionCreateManyVendedorInput | ConversacionCreateManyVendedorInput[]
  }

  export type MensajeCreateWithoutEmisorInput = {
    texto: string
    creadoEn?: Date | string
    conversacion: ConversacionCreateNestedOneWithoutMensajesInput
  }

  export type MensajeUncheckedCreateWithoutEmisorInput = {
    id?: number
    conversacionId: number
    texto: string
    creadoEn?: Date | string
  }

  export type MensajeCreateOrConnectWithoutEmisorInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutEmisorInput, MensajeUncheckedCreateWithoutEmisorInput>
  }

  export type MensajeCreateManyEmisorInputEnvelope = {
    data: MensajeCreateManyEmisorInput | MensajeCreateManyEmisorInput[]
  }

  export type PublicacionUpsertWithWhereUniqueWithoutVendedorInput = {
    where: PublicacionWhereUniqueInput
    update: XOR<PublicacionUpdateWithoutVendedorInput, PublicacionUncheckedUpdateWithoutVendedorInput>
    create: XOR<PublicacionCreateWithoutVendedorInput, PublicacionUncheckedCreateWithoutVendedorInput>
  }

  export type PublicacionUpdateWithWhereUniqueWithoutVendedorInput = {
    where: PublicacionWhereUniqueInput
    data: XOR<PublicacionUpdateWithoutVendedorInput, PublicacionUncheckedUpdateWithoutVendedorInput>
  }

  export type PublicacionUpdateManyWithWhereWithoutVendedorInput = {
    where: PublicacionScalarWhereInput
    data: XOR<PublicacionUpdateManyMutationInput, PublicacionUncheckedUpdateManyWithoutVendedorInput>
  }

  export type PublicacionScalarWhereInput = {
    AND?: PublicacionScalarWhereInput | PublicacionScalarWhereInput[]
    OR?: PublicacionScalarWhereInput[]
    NOT?: PublicacionScalarWhereInput | PublicacionScalarWhereInput[]
    id?: IntFilter<"Publicacion"> | number
    vendedorId?: IntFilter<"Publicacion"> | number
    categoriaId?: IntFilter<"Publicacion"> | number
    titulo?: StringFilter<"Publicacion"> | string
    descripcion?: StringFilter<"Publicacion"> | string
    cantidad?: FloatFilter<"Publicacion"> | number
    unidad?: StringFilter<"Publicacion"> | string
    precio?: FloatFilter<"Publicacion"> | number
    latitud?: FloatFilter<"Publicacion"> | number
    longitud?: FloatFilter<"Publicacion"> | number
    estado?: StringFilter<"Publicacion"> | string
    fechaVencimiento?: DateTimeFilter<"Publicacion"> | Date | string
    creadoEn?: DateTimeFilter<"Publicacion"> | Date | string
  }

  export type BusquedaGuardadaUpsertWithWhereUniqueWithoutCompradorInput = {
    where: BusquedaGuardadaWhereUniqueInput
    update: XOR<BusquedaGuardadaUpdateWithoutCompradorInput, BusquedaGuardadaUncheckedUpdateWithoutCompradorInput>
    create: XOR<BusquedaGuardadaCreateWithoutCompradorInput, BusquedaGuardadaUncheckedCreateWithoutCompradorInput>
  }

  export type BusquedaGuardadaUpdateWithWhereUniqueWithoutCompradorInput = {
    where: BusquedaGuardadaWhereUniqueInput
    data: XOR<BusquedaGuardadaUpdateWithoutCompradorInput, BusquedaGuardadaUncheckedUpdateWithoutCompradorInput>
  }

  export type BusquedaGuardadaUpdateManyWithWhereWithoutCompradorInput = {
    where: BusquedaGuardadaScalarWhereInput
    data: XOR<BusquedaGuardadaUpdateManyMutationInput, BusquedaGuardadaUncheckedUpdateManyWithoutCompradorInput>
  }

  export type BusquedaGuardadaScalarWhereInput = {
    AND?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
    OR?: BusquedaGuardadaScalarWhereInput[]
    NOT?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
    id?: IntFilter<"BusquedaGuardada"> | number
    compradorId?: IntFilter<"BusquedaGuardada"> | number
    categoriaId?: IntFilter<"BusquedaGuardada"> | number
    palabrasClave?: StringNullableFilter<"BusquedaGuardada"> | string | null
    latitud?: FloatFilter<"BusquedaGuardada"> | number
    longitud?: FloatFilter<"BusquedaGuardada"> | number
    radioKm?: FloatFilter<"BusquedaGuardada"> | number
    precioMaximo?: FloatNullableFilter<"BusquedaGuardada"> | number | null
    activa?: BoolFilter<"BusquedaGuardada"> | boolean
    creadoEn?: DateTimeFilter<"BusquedaGuardada"> | Date | string
  }

  export type ConversacionUpsertWithWhereUniqueWithoutCompradorInput = {
    where: ConversacionWhereUniqueInput
    update: XOR<ConversacionUpdateWithoutCompradorInput, ConversacionUncheckedUpdateWithoutCompradorInput>
    create: XOR<ConversacionCreateWithoutCompradorInput, ConversacionUncheckedCreateWithoutCompradorInput>
  }

  export type ConversacionUpdateWithWhereUniqueWithoutCompradorInput = {
    where: ConversacionWhereUniqueInput
    data: XOR<ConversacionUpdateWithoutCompradorInput, ConversacionUncheckedUpdateWithoutCompradorInput>
  }

  export type ConversacionUpdateManyWithWhereWithoutCompradorInput = {
    where: ConversacionScalarWhereInput
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyWithoutCompradorInput>
  }

  export type ConversacionScalarWhereInput = {
    AND?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
    OR?: ConversacionScalarWhereInput[]
    NOT?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
    id?: IntFilter<"Conversacion"> | number
    publicacionId?: IntFilter<"Conversacion"> | number
    compradorId?: IntFilter<"Conversacion"> | number
    vendedorId?: IntFilter<"Conversacion"> | number
    telefonoRevelado?: BoolFilter<"Conversacion"> | boolean
    creadoEn?: DateTimeFilter<"Conversacion"> | Date | string
  }

  export type ConversacionUpsertWithWhereUniqueWithoutVendedorInput = {
    where: ConversacionWhereUniqueInput
    update: XOR<ConversacionUpdateWithoutVendedorInput, ConversacionUncheckedUpdateWithoutVendedorInput>
    create: XOR<ConversacionCreateWithoutVendedorInput, ConversacionUncheckedCreateWithoutVendedorInput>
  }

  export type ConversacionUpdateWithWhereUniqueWithoutVendedorInput = {
    where: ConversacionWhereUniqueInput
    data: XOR<ConversacionUpdateWithoutVendedorInput, ConversacionUncheckedUpdateWithoutVendedorInput>
  }

  export type ConversacionUpdateManyWithWhereWithoutVendedorInput = {
    where: ConversacionScalarWhereInput
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyWithoutVendedorInput>
  }

  export type MensajeUpsertWithWhereUniqueWithoutEmisorInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutEmisorInput, MensajeUncheckedUpdateWithoutEmisorInput>
    create: XOR<MensajeCreateWithoutEmisorInput, MensajeUncheckedCreateWithoutEmisorInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutEmisorInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutEmisorInput, MensajeUncheckedUpdateWithoutEmisorInput>
  }

  export type MensajeUpdateManyWithWhereWithoutEmisorInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutEmisorInput>
  }

  export type MensajeScalarWhereInput = {
    AND?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
    OR?: MensajeScalarWhereInput[]
    NOT?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
    id?: IntFilter<"Mensaje"> | number
    conversacionId?: IntFilter<"Mensaje"> | number
    emisorId?: IntFilter<"Mensaje"> | number
    texto?: StringFilter<"Mensaje"> | string
    creadoEn?: DateTimeFilter<"Mensaje"> | Date | string
  }

  export type CategoriaCreateWithoutSubcategoriasInput = {
    nombre: string
    categoriaPadre?: CategoriaCreateNestedOneWithoutSubcategoriasInput
    publicaciones?: PublicacionCreateNestedManyWithoutCategoriaInput
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutSubcategoriasInput = {
    id?: number
    nombre: string
    categoriaPadreId?: number | null
    publicaciones?: PublicacionUncheckedCreateNestedManyWithoutCategoriaInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutSubcategoriasInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutSubcategoriasInput, CategoriaUncheckedCreateWithoutSubcategoriasInput>
  }

  export type CategoriaCreateWithoutCategoriaPadreInput = {
    nombre: string
    subcategorias?: CategoriaCreateNestedManyWithoutCategoriaPadreInput
    publicaciones?: PublicacionCreateNestedManyWithoutCategoriaInput
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutCategoriaPadreInput = {
    id?: number
    nombre: string
    subcategorias?: CategoriaUncheckedCreateNestedManyWithoutCategoriaPadreInput
    publicaciones?: PublicacionUncheckedCreateNestedManyWithoutCategoriaInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutCategoriaPadreInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutCategoriaPadreInput, CategoriaUncheckedCreateWithoutCategoriaPadreInput>
  }

  export type CategoriaCreateManyCategoriaPadreInputEnvelope = {
    data: CategoriaCreateManyCategoriaPadreInput | CategoriaCreateManyCategoriaPadreInput[]
  }

  export type PublicacionCreateWithoutCategoriaInput = {
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    vendedor: UsuarioCreateNestedOneWithoutPublicacionesInput
    fotos?: PublicacionFotoCreateNestedManyWithoutPublicacionInput
    alertas?: AlertaCreateNestedManyWithoutPublicacionInput
    conversaciones?: ConversacionCreateNestedManyWithoutPublicacionInput
    reportes?: ReporteCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionUncheckedCreateWithoutCategoriaInput = {
    id?: number
    vendedorId: number
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    fotos?: PublicacionFotoUncheckedCreateNestedManyWithoutPublicacionInput
    alertas?: AlertaUncheckedCreateNestedManyWithoutPublicacionInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPublicacionInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionCreateOrConnectWithoutCategoriaInput = {
    where: PublicacionWhereUniqueInput
    create: XOR<PublicacionCreateWithoutCategoriaInput, PublicacionUncheckedCreateWithoutCategoriaInput>
  }

  export type PublicacionCreateManyCategoriaInputEnvelope = {
    data: PublicacionCreateManyCategoriaInput | PublicacionCreateManyCategoriaInput[]
  }

  export type BusquedaGuardadaCreateWithoutCategoriaInput = {
    palabrasClave?: string | null
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo?: number | null
    activa?: boolean
    creadoEn?: Date | string
    comprador: UsuarioCreateNestedOneWithoutBusquedasGuardadasInput
    alertas?: AlertaCreateNestedManyWithoutBusquedaInput
  }

  export type BusquedaGuardadaUncheckedCreateWithoutCategoriaInput = {
    id?: number
    compradorId: number
    palabrasClave?: string | null
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo?: number | null
    activa?: boolean
    creadoEn?: Date | string
    alertas?: AlertaUncheckedCreateNestedManyWithoutBusquedaInput
  }

  export type BusquedaGuardadaCreateOrConnectWithoutCategoriaInput = {
    where: BusquedaGuardadaWhereUniqueInput
    create: XOR<BusquedaGuardadaCreateWithoutCategoriaInput, BusquedaGuardadaUncheckedCreateWithoutCategoriaInput>
  }

  export type BusquedaGuardadaCreateManyCategoriaInputEnvelope = {
    data: BusquedaGuardadaCreateManyCategoriaInput | BusquedaGuardadaCreateManyCategoriaInput[]
  }

  export type CategoriaUpsertWithoutSubcategoriasInput = {
    update: XOR<CategoriaUpdateWithoutSubcategoriasInput, CategoriaUncheckedUpdateWithoutSubcategoriasInput>
    create: XOR<CategoriaCreateWithoutSubcategoriasInput, CategoriaUncheckedCreateWithoutSubcategoriasInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutSubcategoriasInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutSubcategoriasInput, CategoriaUncheckedUpdateWithoutSubcategoriasInput>
  }

  export type CategoriaUpdateWithoutSubcategoriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaPadre?: CategoriaUpdateOneWithoutSubcategoriasNestedInput
    publicaciones?: PublicacionUpdateManyWithoutCategoriaNestedInput
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutSubcategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaPadreId?: NullableIntFieldUpdateOperationsInput | number | null
    publicaciones?: PublicacionUncheckedUpdateManyWithoutCategoriaNestedInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUpsertWithWhereUniqueWithoutCategoriaPadreInput = {
    where: CategoriaWhereUniqueInput
    update: XOR<CategoriaUpdateWithoutCategoriaPadreInput, CategoriaUncheckedUpdateWithoutCategoriaPadreInput>
    create: XOR<CategoriaCreateWithoutCategoriaPadreInput, CategoriaUncheckedCreateWithoutCategoriaPadreInput>
  }

  export type CategoriaUpdateWithWhereUniqueWithoutCategoriaPadreInput = {
    where: CategoriaWhereUniqueInput
    data: XOR<CategoriaUpdateWithoutCategoriaPadreInput, CategoriaUncheckedUpdateWithoutCategoriaPadreInput>
  }

  export type CategoriaUpdateManyWithWhereWithoutCategoriaPadreInput = {
    where: CategoriaScalarWhereInput
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyWithoutCategoriaPadreInput>
  }

  export type CategoriaScalarWhereInput = {
    AND?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    OR?: CategoriaScalarWhereInput[]
    NOT?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    categoriaPadreId?: IntNullableFilter<"Categoria"> | number | null
  }

  export type PublicacionUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: PublicacionWhereUniqueInput
    update: XOR<PublicacionUpdateWithoutCategoriaInput, PublicacionUncheckedUpdateWithoutCategoriaInput>
    create: XOR<PublicacionCreateWithoutCategoriaInput, PublicacionUncheckedCreateWithoutCategoriaInput>
  }

  export type PublicacionUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: PublicacionWhereUniqueInput
    data: XOR<PublicacionUpdateWithoutCategoriaInput, PublicacionUncheckedUpdateWithoutCategoriaInput>
  }

  export type PublicacionUpdateManyWithWhereWithoutCategoriaInput = {
    where: PublicacionScalarWhereInput
    data: XOR<PublicacionUpdateManyMutationInput, PublicacionUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type BusquedaGuardadaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: BusquedaGuardadaWhereUniqueInput
    update: XOR<BusquedaGuardadaUpdateWithoutCategoriaInput, BusquedaGuardadaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<BusquedaGuardadaCreateWithoutCategoriaInput, BusquedaGuardadaUncheckedCreateWithoutCategoriaInput>
  }

  export type BusquedaGuardadaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: BusquedaGuardadaWhereUniqueInput
    data: XOR<BusquedaGuardadaUpdateWithoutCategoriaInput, BusquedaGuardadaUncheckedUpdateWithoutCategoriaInput>
  }

  export type BusquedaGuardadaUpdateManyWithWhereWithoutCategoriaInput = {
    where: BusquedaGuardadaScalarWhereInput
    data: XOR<BusquedaGuardadaUpdateManyMutationInput, BusquedaGuardadaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type UsuarioCreateWithoutPublicacionesInput = {
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutCompradorInput
    conversacionesComoComprador?: ConversacionCreateNestedManyWithoutCompradorInput
    conversacionesComoVendedor?: ConversacionCreateNestedManyWithoutVendedorInput
    mensajes?: MensajeCreateNestedManyWithoutEmisorInput
  }

  export type UsuarioUncheckedCreateWithoutPublicacionesInput = {
    id?: number
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutCompradorInput
    conversacionesComoComprador?: ConversacionUncheckedCreateNestedManyWithoutCompradorInput
    conversacionesComoVendedor?: ConversacionUncheckedCreateNestedManyWithoutVendedorInput
    mensajes?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
  }

  export type UsuarioCreateOrConnectWithoutPublicacionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPublicacionesInput, UsuarioUncheckedCreateWithoutPublicacionesInput>
  }

  export type CategoriaCreateWithoutPublicacionesInput = {
    nombre: string
    categoriaPadre?: CategoriaCreateNestedOneWithoutSubcategoriasInput
    subcategorias?: CategoriaCreateNestedManyWithoutCategoriaPadreInput
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutPublicacionesInput = {
    id?: number
    nombre: string
    categoriaPadreId?: number | null
    subcategorias?: CategoriaUncheckedCreateNestedManyWithoutCategoriaPadreInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutPublicacionesInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutPublicacionesInput, CategoriaUncheckedCreateWithoutPublicacionesInput>
  }

  export type PublicacionFotoCreateWithoutPublicacionInput = {
    url: string
    orden?: number
  }

  export type PublicacionFotoUncheckedCreateWithoutPublicacionInput = {
    id?: number
    url: string
    orden?: number
  }

  export type PublicacionFotoCreateOrConnectWithoutPublicacionInput = {
    where: PublicacionFotoWhereUniqueInput
    create: XOR<PublicacionFotoCreateWithoutPublicacionInput, PublicacionFotoUncheckedCreateWithoutPublicacionInput>
  }

  export type PublicacionFotoCreateManyPublicacionInputEnvelope = {
    data: PublicacionFotoCreateManyPublicacionInput | PublicacionFotoCreateManyPublicacionInput[]
  }

  export type AlertaCreateWithoutPublicacionInput = {
    leida?: boolean
    creadoEn?: Date | string
    busqueda: BusquedaGuardadaCreateNestedOneWithoutAlertasInput
  }

  export type AlertaUncheckedCreateWithoutPublicacionInput = {
    id?: number
    busquedaId: number
    leida?: boolean
    creadoEn?: Date | string
  }

  export type AlertaCreateOrConnectWithoutPublicacionInput = {
    where: AlertaWhereUniqueInput
    create: XOR<AlertaCreateWithoutPublicacionInput, AlertaUncheckedCreateWithoutPublicacionInput>
  }

  export type AlertaCreateManyPublicacionInputEnvelope = {
    data: AlertaCreateManyPublicacionInput | AlertaCreateManyPublicacionInput[]
  }

  export type ConversacionCreateWithoutPublicacionInput = {
    telefonoRevelado?: boolean
    creadoEn?: Date | string
    comprador: UsuarioCreateNestedOneWithoutConversacionesComoCompradorInput
    vendedor: UsuarioCreateNestedOneWithoutConversacionesComoVendedorInput
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateWithoutPublicacionInput = {
    id?: number
    compradorId: number
    vendedorId: number
    telefonoRevelado?: boolean
    creadoEn?: Date | string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionCreateOrConnectWithoutPublicacionInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutPublicacionInput, ConversacionUncheckedCreateWithoutPublicacionInput>
  }

  export type ConversacionCreateManyPublicacionInputEnvelope = {
    data: ConversacionCreateManyPublicacionInput | ConversacionCreateManyPublicacionInput[]
  }

  export type ReporteCreateWithoutPublicacionInput = {
    motivo: string
    estado?: string
    creadoEn?: Date | string
  }

  export type ReporteUncheckedCreateWithoutPublicacionInput = {
    id?: number
    motivo: string
    estado?: string
    creadoEn?: Date | string
  }

  export type ReporteCreateOrConnectWithoutPublicacionInput = {
    where: ReporteWhereUniqueInput
    create: XOR<ReporteCreateWithoutPublicacionInput, ReporteUncheckedCreateWithoutPublicacionInput>
  }

  export type ReporteCreateManyPublicacionInputEnvelope = {
    data: ReporteCreateManyPublicacionInput | ReporteCreateManyPublicacionInput[]
  }

  export type UsuarioUpsertWithoutPublicacionesInput = {
    update: XOR<UsuarioUpdateWithoutPublicacionesInput, UsuarioUncheckedUpdateWithoutPublicacionesInput>
    create: XOR<UsuarioCreateWithoutPublicacionesInput, UsuarioUncheckedCreateWithoutPublicacionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPublicacionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPublicacionesInput, UsuarioUncheckedUpdateWithoutPublicacionesInput>
  }

  export type UsuarioUpdateWithoutPublicacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutCompradorNestedInput
    conversacionesComoComprador?: ConversacionUpdateManyWithoutCompradorNestedInput
    conversacionesComoVendedor?: ConversacionUpdateManyWithoutVendedorNestedInput
    mensajes?: MensajeUpdateManyWithoutEmisorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPublicacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutCompradorNestedInput
    conversacionesComoComprador?: ConversacionUncheckedUpdateManyWithoutCompradorNestedInput
    conversacionesComoVendedor?: ConversacionUncheckedUpdateManyWithoutVendedorNestedInput
    mensajes?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
  }

  export type CategoriaUpsertWithoutPublicacionesInput = {
    update: XOR<CategoriaUpdateWithoutPublicacionesInput, CategoriaUncheckedUpdateWithoutPublicacionesInput>
    create: XOR<CategoriaCreateWithoutPublicacionesInput, CategoriaUncheckedCreateWithoutPublicacionesInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutPublicacionesInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutPublicacionesInput, CategoriaUncheckedUpdateWithoutPublicacionesInput>
  }

  export type CategoriaUpdateWithoutPublicacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaPadre?: CategoriaUpdateOneWithoutSubcategoriasNestedInput
    subcategorias?: CategoriaUpdateManyWithoutCategoriaPadreNestedInput
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutPublicacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaPadreId?: NullableIntFieldUpdateOperationsInput | number | null
    subcategorias?: CategoriaUncheckedUpdateManyWithoutCategoriaPadreNestedInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type PublicacionFotoUpsertWithWhereUniqueWithoutPublicacionInput = {
    where: PublicacionFotoWhereUniqueInput
    update: XOR<PublicacionFotoUpdateWithoutPublicacionInput, PublicacionFotoUncheckedUpdateWithoutPublicacionInput>
    create: XOR<PublicacionFotoCreateWithoutPublicacionInput, PublicacionFotoUncheckedCreateWithoutPublicacionInput>
  }

  export type PublicacionFotoUpdateWithWhereUniqueWithoutPublicacionInput = {
    where: PublicacionFotoWhereUniqueInput
    data: XOR<PublicacionFotoUpdateWithoutPublicacionInput, PublicacionFotoUncheckedUpdateWithoutPublicacionInput>
  }

  export type PublicacionFotoUpdateManyWithWhereWithoutPublicacionInput = {
    where: PublicacionFotoScalarWhereInput
    data: XOR<PublicacionFotoUpdateManyMutationInput, PublicacionFotoUncheckedUpdateManyWithoutPublicacionInput>
  }

  export type PublicacionFotoScalarWhereInput = {
    AND?: PublicacionFotoScalarWhereInput | PublicacionFotoScalarWhereInput[]
    OR?: PublicacionFotoScalarWhereInput[]
    NOT?: PublicacionFotoScalarWhereInput | PublicacionFotoScalarWhereInput[]
    id?: IntFilter<"PublicacionFoto"> | number
    publicacionId?: IntFilter<"PublicacionFoto"> | number
    url?: StringFilter<"PublicacionFoto"> | string
    orden?: IntFilter<"PublicacionFoto"> | number
  }

  export type AlertaUpsertWithWhereUniqueWithoutPublicacionInput = {
    where: AlertaWhereUniqueInput
    update: XOR<AlertaUpdateWithoutPublicacionInput, AlertaUncheckedUpdateWithoutPublicacionInput>
    create: XOR<AlertaCreateWithoutPublicacionInput, AlertaUncheckedCreateWithoutPublicacionInput>
  }

  export type AlertaUpdateWithWhereUniqueWithoutPublicacionInput = {
    where: AlertaWhereUniqueInput
    data: XOR<AlertaUpdateWithoutPublicacionInput, AlertaUncheckedUpdateWithoutPublicacionInput>
  }

  export type AlertaUpdateManyWithWhereWithoutPublicacionInput = {
    where: AlertaScalarWhereInput
    data: XOR<AlertaUpdateManyMutationInput, AlertaUncheckedUpdateManyWithoutPublicacionInput>
  }

  export type AlertaScalarWhereInput = {
    AND?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
    OR?: AlertaScalarWhereInput[]
    NOT?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
    id?: IntFilter<"Alerta"> | number
    busquedaId?: IntFilter<"Alerta"> | number
    publicacionId?: IntFilter<"Alerta"> | number
    leida?: BoolFilter<"Alerta"> | boolean
    creadoEn?: DateTimeFilter<"Alerta"> | Date | string
  }

  export type ConversacionUpsertWithWhereUniqueWithoutPublicacionInput = {
    where: ConversacionWhereUniqueInput
    update: XOR<ConversacionUpdateWithoutPublicacionInput, ConversacionUncheckedUpdateWithoutPublicacionInput>
    create: XOR<ConversacionCreateWithoutPublicacionInput, ConversacionUncheckedCreateWithoutPublicacionInput>
  }

  export type ConversacionUpdateWithWhereUniqueWithoutPublicacionInput = {
    where: ConversacionWhereUniqueInput
    data: XOR<ConversacionUpdateWithoutPublicacionInput, ConversacionUncheckedUpdateWithoutPublicacionInput>
  }

  export type ConversacionUpdateManyWithWhereWithoutPublicacionInput = {
    where: ConversacionScalarWhereInput
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyWithoutPublicacionInput>
  }

  export type ReporteUpsertWithWhereUniqueWithoutPublicacionInput = {
    where: ReporteWhereUniqueInput
    update: XOR<ReporteUpdateWithoutPublicacionInput, ReporteUncheckedUpdateWithoutPublicacionInput>
    create: XOR<ReporteCreateWithoutPublicacionInput, ReporteUncheckedCreateWithoutPublicacionInput>
  }

  export type ReporteUpdateWithWhereUniqueWithoutPublicacionInput = {
    where: ReporteWhereUniqueInput
    data: XOR<ReporteUpdateWithoutPublicacionInput, ReporteUncheckedUpdateWithoutPublicacionInput>
  }

  export type ReporteUpdateManyWithWhereWithoutPublicacionInput = {
    where: ReporteScalarWhereInput
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyWithoutPublicacionInput>
  }

  export type ReporteScalarWhereInput = {
    AND?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
    OR?: ReporteScalarWhereInput[]
    NOT?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
    id?: IntFilter<"Reporte"> | number
    publicacionId?: IntFilter<"Reporte"> | number
    motivo?: StringFilter<"Reporte"> | string
    estado?: StringFilter<"Reporte"> | string
    creadoEn?: DateTimeFilter<"Reporte"> | Date | string
  }

  export type PublicacionCreateWithoutFotosInput = {
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    vendedor: UsuarioCreateNestedOneWithoutPublicacionesInput
    categoria: CategoriaCreateNestedOneWithoutPublicacionesInput
    alertas?: AlertaCreateNestedManyWithoutPublicacionInput
    conversaciones?: ConversacionCreateNestedManyWithoutPublicacionInput
    reportes?: ReporteCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionUncheckedCreateWithoutFotosInput = {
    id?: number
    vendedorId: number
    categoriaId: number
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    alertas?: AlertaUncheckedCreateNestedManyWithoutPublicacionInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPublicacionInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionCreateOrConnectWithoutFotosInput = {
    where: PublicacionWhereUniqueInput
    create: XOR<PublicacionCreateWithoutFotosInput, PublicacionUncheckedCreateWithoutFotosInput>
  }

  export type PublicacionUpsertWithoutFotosInput = {
    update: XOR<PublicacionUpdateWithoutFotosInput, PublicacionUncheckedUpdateWithoutFotosInput>
    create: XOR<PublicacionCreateWithoutFotosInput, PublicacionUncheckedCreateWithoutFotosInput>
    where?: PublicacionWhereInput
  }

  export type PublicacionUpdateToOneWithWhereWithoutFotosInput = {
    where?: PublicacionWhereInput
    data: XOR<PublicacionUpdateWithoutFotosInput, PublicacionUncheckedUpdateWithoutFotosInput>
  }

  export type PublicacionUpdateWithoutFotosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    vendedor?: UsuarioUpdateOneRequiredWithoutPublicacionesNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPublicacionesNestedInput
    alertas?: AlertaUpdateManyWithoutPublicacionNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPublicacionNestedInput
    reportes?: ReporteUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateWithoutFotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    alertas?: AlertaUncheckedUpdateManyWithoutPublicacionNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPublicacionNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type UsuarioCreateWithoutBusquedasGuardadasInput = {
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
    publicaciones?: PublicacionCreateNestedManyWithoutVendedorInput
    conversacionesComoComprador?: ConversacionCreateNestedManyWithoutCompradorInput
    conversacionesComoVendedor?: ConversacionCreateNestedManyWithoutVendedorInput
    mensajes?: MensajeCreateNestedManyWithoutEmisorInput
  }

  export type UsuarioUncheckedCreateWithoutBusquedasGuardadasInput = {
    id?: number
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
    publicaciones?: PublicacionUncheckedCreateNestedManyWithoutVendedorInput
    conversacionesComoComprador?: ConversacionUncheckedCreateNestedManyWithoutCompradorInput
    conversacionesComoVendedor?: ConversacionUncheckedCreateNestedManyWithoutVendedorInput
    mensajes?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
  }

  export type UsuarioCreateOrConnectWithoutBusquedasGuardadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutBusquedasGuardadasInput, UsuarioUncheckedCreateWithoutBusquedasGuardadasInput>
  }

  export type CategoriaCreateWithoutBusquedasGuardadasInput = {
    nombre: string
    categoriaPadre?: CategoriaCreateNestedOneWithoutSubcategoriasInput
    subcategorias?: CategoriaCreateNestedManyWithoutCategoriaPadreInput
    publicaciones?: PublicacionCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutBusquedasGuardadasInput = {
    id?: number
    nombre: string
    categoriaPadreId?: number | null
    subcategorias?: CategoriaUncheckedCreateNestedManyWithoutCategoriaPadreInput
    publicaciones?: PublicacionUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutBusquedasGuardadasInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutBusquedasGuardadasInput, CategoriaUncheckedCreateWithoutBusquedasGuardadasInput>
  }

  export type AlertaCreateWithoutBusquedaInput = {
    leida?: boolean
    creadoEn?: Date | string
    publicacion: PublicacionCreateNestedOneWithoutAlertasInput
  }

  export type AlertaUncheckedCreateWithoutBusquedaInput = {
    id?: number
    publicacionId: number
    leida?: boolean
    creadoEn?: Date | string
  }

  export type AlertaCreateOrConnectWithoutBusquedaInput = {
    where: AlertaWhereUniqueInput
    create: XOR<AlertaCreateWithoutBusquedaInput, AlertaUncheckedCreateWithoutBusquedaInput>
  }

  export type AlertaCreateManyBusquedaInputEnvelope = {
    data: AlertaCreateManyBusquedaInput | AlertaCreateManyBusquedaInput[]
  }

  export type UsuarioUpsertWithoutBusquedasGuardadasInput = {
    update: XOR<UsuarioUpdateWithoutBusquedasGuardadasInput, UsuarioUncheckedUpdateWithoutBusquedasGuardadasInput>
    create: XOR<UsuarioCreateWithoutBusquedasGuardadasInput, UsuarioUncheckedCreateWithoutBusquedasGuardadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutBusquedasGuardadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutBusquedasGuardadasInput, UsuarioUncheckedUpdateWithoutBusquedasGuardadasInput>
  }

  export type UsuarioUpdateWithoutBusquedasGuardadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUpdateManyWithoutVendedorNestedInput
    conversacionesComoComprador?: ConversacionUpdateManyWithoutCompradorNestedInput
    conversacionesComoVendedor?: ConversacionUpdateManyWithoutVendedorNestedInput
    mensajes?: MensajeUpdateManyWithoutEmisorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutBusquedasGuardadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUncheckedUpdateManyWithoutVendedorNestedInput
    conversacionesComoComprador?: ConversacionUncheckedUpdateManyWithoutCompradorNestedInput
    conversacionesComoVendedor?: ConversacionUncheckedUpdateManyWithoutVendedorNestedInput
    mensajes?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
  }

  export type CategoriaUpsertWithoutBusquedasGuardadasInput = {
    update: XOR<CategoriaUpdateWithoutBusquedasGuardadasInput, CategoriaUncheckedUpdateWithoutBusquedasGuardadasInput>
    create: XOR<CategoriaCreateWithoutBusquedasGuardadasInput, CategoriaUncheckedCreateWithoutBusquedasGuardadasInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutBusquedasGuardadasInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutBusquedasGuardadasInput, CategoriaUncheckedUpdateWithoutBusquedasGuardadasInput>
  }

  export type CategoriaUpdateWithoutBusquedasGuardadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaPadre?: CategoriaUpdateOneWithoutSubcategoriasNestedInput
    subcategorias?: CategoriaUpdateManyWithoutCategoriaPadreNestedInput
    publicaciones?: PublicacionUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutBusquedasGuardadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaPadreId?: NullableIntFieldUpdateOperationsInput | number | null
    subcategorias?: CategoriaUncheckedUpdateManyWithoutCategoriaPadreNestedInput
    publicaciones?: PublicacionUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type AlertaUpsertWithWhereUniqueWithoutBusquedaInput = {
    where: AlertaWhereUniqueInput
    update: XOR<AlertaUpdateWithoutBusquedaInput, AlertaUncheckedUpdateWithoutBusquedaInput>
    create: XOR<AlertaCreateWithoutBusquedaInput, AlertaUncheckedCreateWithoutBusquedaInput>
  }

  export type AlertaUpdateWithWhereUniqueWithoutBusquedaInput = {
    where: AlertaWhereUniqueInput
    data: XOR<AlertaUpdateWithoutBusquedaInput, AlertaUncheckedUpdateWithoutBusquedaInput>
  }

  export type AlertaUpdateManyWithWhereWithoutBusquedaInput = {
    where: AlertaScalarWhereInput
    data: XOR<AlertaUpdateManyMutationInput, AlertaUncheckedUpdateManyWithoutBusquedaInput>
  }

  export type BusquedaGuardadaCreateWithoutAlertasInput = {
    palabrasClave?: string | null
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo?: number | null
    activa?: boolean
    creadoEn?: Date | string
    comprador: UsuarioCreateNestedOneWithoutBusquedasGuardadasInput
    categoria: CategoriaCreateNestedOneWithoutBusquedasGuardadasInput
  }

  export type BusquedaGuardadaUncheckedCreateWithoutAlertasInput = {
    id?: number
    compradorId: number
    categoriaId: number
    palabrasClave?: string | null
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo?: number | null
    activa?: boolean
    creadoEn?: Date | string
  }

  export type BusquedaGuardadaCreateOrConnectWithoutAlertasInput = {
    where: BusquedaGuardadaWhereUniqueInput
    create: XOR<BusquedaGuardadaCreateWithoutAlertasInput, BusquedaGuardadaUncheckedCreateWithoutAlertasInput>
  }

  export type PublicacionCreateWithoutAlertasInput = {
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    vendedor: UsuarioCreateNestedOneWithoutPublicacionesInput
    categoria: CategoriaCreateNestedOneWithoutPublicacionesInput
    fotos?: PublicacionFotoCreateNestedManyWithoutPublicacionInput
    conversaciones?: ConversacionCreateNestedManyWithoutPublicacionInput
    reportes?: ReporteCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionUncheckedCreateWithoutAlertasInput = {
    id?: number
    vendedorId: number
    categoriaId: number
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    fotos?: PublicacionFotoUncheckedCreateNestedManyWithoutPublicacionInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPublicacionInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionCreateOrConnectWithoutAlertasInput = {
    where: PublicacionWhereUniqueInput
    create: XOR<PublicacionCreateWithoutAlertasInput, PublicacionUncheckedCreateWithoutAlertasInput>
  }

  export type BusquedaGuardadaUpsertWithoutAlertasInput = {
    update: XOR<BusquedaGuardadaUpdateWithoutAlertasInput, BusquedaGuardadaUncheckedUpdateWithoutAlertasInput>
    create: XOR<BusquedaGuardadaCreateWithoutAlertasInput, BusquedaGuardadaUncheckedCreateWithoutAlertasInput>
    where?: BusquedaGuardadaWhereInput
  }

  export type BusquedaGuardadaUpdateToOneWithWhereWithoutAlertasInput = {
    where?: BusquedaGuardadaWhereInput
    data: XOR<BusquedaGuardadaUpdateWithoutAlertasInput, BusquedaGuardadaUncheckedUpdateWithoutAlertasInput>
  }

  export type BusquedaGuardadaUpdateWithoutAlertasInput = {
    palabrasClave?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    radioKm?: FloatFieldUpdateOperationsInput | number
    precioMaximo?: NullableFloatFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    comprador?: UsuarioUpdateOneRequiredWithoutBusquedasGuardadasNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutBusquedasGuardadasNestedInput
  }

  export type BusquedaGuardadaUncheckedUpdateWithoutAlertasInput = {
    id?: IntFieldUpdateOperationsInput | number
    compradorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    palabrasClave?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    radioKm?: FloatFieldUpdateOperationsInput | number
    precioMaximo?: NullableFloatFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionUpsertWithoutAlertasInput = {
    update: XOR<PublicacionUpdateWithoutAlertasInput, PublicacionUncheckedUpdateWithoutAlertasInput>
    create: XOR<PublicacionCreateWithoutAlertasInput, PublicacionUncheckedCreateWithoutAlertasInput>
    where?: PublicacionWhereInput
  }

  export type PublicacionUpdateToOneWithWhereWithoutAlertasInput = {
    where?: PublicacionWhereInput
    data: XOR<PublicacionUpdateWithoutAlertasInput, PublicacionUncheckedUpdateWithoutAlertasInput>
  }

  export type PublicacionUpdateWithoutAlertasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    vendedor?: UsuarioUpdateOneRequiredWithoutPublicacionesNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPublicacionesNestedInput
    fotos?: PublicacionFotoUpdateManyWithoutPublicacionNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPublicacionNestedInput
    reportes?: ReporteUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateWithoutAlertasInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: PublicacionFotoUncheckedUpdateManyWithoutPublicacionNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPublicacionNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionCreateWithoutConversacionesInput = {
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    vendedor: UsuarioCreateNestedOneWithoutPublicacionesInput
    categoria: CategoriaCreateNestedOneWithoutPublicacionesInput
    fotos?: PublicacionFotoCreateNestedManyWithoutPublicacionInput
    alertas?: AlertaCreateNestedManyWithoutPublicacionInput
    reportes?: ReporteCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionUncheckedCreateWithoutConversacionesInput = {
    id?: number
    vendedorId: number
    categoriaId: number
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    fotos?: PublicacionFotoUncheckedCreateNestedManyWithoutPublicacionInput
    alertas?: AlertaUncheckedCreateNestedManyWithoutPublicacionInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionCreateOrConnectWithoutConversacionesInput = {
    where: PublicacionWhereUniqueInput
    create: XOR<PublicacionCreateWithoutConversacionesInput, PublicacionUncheckedCreateWithoutConversacionesInput>
  }

  export type UsuarioCreateWithoutConversacionesComoCompradorInput = {
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
    publicaciones?: PublicacionCreateNestedManyWithoutVendedorInput
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutCompradorInput
    conversacionesComoVendedor?: ConversacionCreateNestedManyWithoutVendedorInput
    mensajes?: MensajeCreateNestedManyWithoutEmisorInput
  }

  export type UsuarioUncheckedCreateWithoutConversacionesComoCompradorInput = {
    id?: number
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
    publicaciones?: PublicacionUncheckedCreateNestedManyWithoutVendedorInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutCompradorInput
    conversacionesComoVendedor?: ConversacionUncheckedCreateNestedManyWithoutVendedorInput
    mensajes?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
  }

  export type UsuarioCreateOrConnectWithoutConversacionesComoCompradorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutConversacionesComoCompradorInput, UsuarioUncheckedCreateWithoutConversacionesComoCompradorInput>
  }

  export type UsuarioCreateWithoutConversacionesComoVendedorInput = {
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
    publicaciones?: PublicacionCreateNestedManyWithoutVendedorInput
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutCompradorInput
    conversacionesComoComprador?: ConversacionCreateNestedManyWithoutCompradorInput
    mensajes?: MensajeCreateNestedManyWithoutEmisorInput
  }

  export type UsuarioUncheckedCreateWithoutConversacionesComoVendedorInput = {
    id?: number
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
    publicaciones?: PublicacionUncheckedCreateNestedManyWithoutVendedorInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutCompradorInput
    conversacionesComoComprador?: ConversacionUncheckedCreateNestedManyWithoutCompradorInput
    mensajes?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
  }

  export type UsuarioCreateOrConnectWithoutConversacionesComoVendedorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutConversacionesComoVendedorInput, UsuarioUncheckedCreateWithoutConversacionesComoVendedorInput>
  }

  export type MensajeCreateWithoutConversacionInput = {
    texto: string
    creadoEn?: Date | string
    emisor: UsuarioCreateNestedOneWithoutMensajesInput
  }

  export type MensajeUncheckedCreateWithoutConversacionInput = {
    id?: number
    emisorId: number
    texto: string
    creadoEn?: Date | string
  }

  export type MensajeCreateOrConnectWithoutConversacionInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput>
  }

  export type MensajeCreateManyConversacionInputEnvelope = {
    data: MensajeCreateManyConversacionInput | MensajeCreateManyConversacionInput[]
  }

  export type PublicacionUpsertWithoutConversacionesInput = {
    update: XOR<PublicacionUpdateWithoutConversacionesInput, PublicacionUncheckedUpdateWithoutConversacionesInput>
    create: XOR<PublicacionCreateWithoutConversacionesInput, PublicacionUncheckedCreateWithoutConversacionesInput>
    where?: PublicacionWhereInput
  }

  export type PublicacionUpdateToOneWithWhereWithoutConversacionesInput = {
    where?: PublicacionWhereInput
    data: XOR<PublicacionUpdateWithoutConversacionesInput, PublicacionUncheckedUpdateWithoutConversacionesInput>
  }

  export type PublicacionUpdateWithoutConversacionesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    vendedor?: UsuarioUpdateOneRequiredWithoutPublicacionesNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPublicacionesNestedInput
    fotos?: PublicacionFotoUpdateManyWithoutPublicacionNestedInput
    alertas?: AlertaUpdateManyWithoutPublicacionNestedInput
    reportes?: ReporteUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateWithoutConversacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: PublicacionFotoUncheckedUpdateManyWithoutPublicacionNestedInput
    alertas?: AlertaUncheckedUpdateManyWithoutPublicacionNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type UsuarioUpsertWithoutConversacionesComoCompradorInput = {
    update: XOR<UsuarioUpdateWithoutConversacionesComoCompradorInput, UsuarioUncheckedUpdateWithoutConversacionesComoCompradorInput>
    create: XOR<UsuarioCreateWithoutConversacionesComoCompradorInput, UsuarioUncheckedCreateWithoutConversacionesComoCompradorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutConversacionesComoCompradorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutConversacionesComoCompradorInput, UsuarioUncheckedUpdateWithoutConversacionesComoCompradorInput>
  }

  export type UsuarioUpdateWithoutConversacionesComoCompradorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUpdateManyWithoutVendedorNestedInput
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutCompradorNestedInput
    conversacionesComoVendedor?: ConversacionUpdateManyWithoutVendedorNestedInput
    mensajes?: MensajeUpdateManyWithoutEmisorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutConversacionesComoCompradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUncheckedUpdateManyWithoutVendedorNestedInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutCompradorNestedInput
    conversacionesComoVendedor?: ConversacionUncheckedUpdateManyWithoutVendedorNestedInput
    mensajes?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
  }

  export type UsuarioUpsertWithoutConversacionesComoVendedorInput = {
    update: XOR<UsuarioUpdateWithoutConversacionesComoVendedorInput, UsuarioUncheckedUpdateWithoutConversacionesComoVendedorInput>
    create: XOR<UsuarioCreateWithoutConversacionesComoVendedorInput, UsuarioUncheckedCreateWithoutConversacionesComoVendedorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutConversacionesComoVendedorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutConversacionesComoVendedorInput, UsuarioUncheckedUpdateWithoutConversacionesComoVendedorInput>
  }

  export type UsuarioUpdateWithoutConversacionesComoVendedorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUpdateManyWithoutVendedorNestedInput
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutCompradorNestedInput
    conversacionesComoComprador?: ConversacionUpdateManyWithoutCompradorNestedInput
    mensajes?: MensajeUpdateManyWithoutEmisorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutConversacionesComoVendedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUncheckedUpdateManyWithoutVendedorNestedInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutCompradorNestedInput
    conversacionesComoComprador?: ConversacionUncheckedUpdateManyWithoutCompradorNestedInput
    mensajes?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
  }

  export type MensajeUpsertWithWhereUniqueWithoutConversacionInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutConversacionInput, MensajeUncheckedUpdateWithoutConversacionInput>
    create: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutConversacionInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutConversacionInput, MensajeUncheckedUpdateWithoutConversacionInput>
  }

  export type MensajeUpdateManyWithWhereWithoutConversacionInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutConversacionInput>
  }

  export type ConversacionCreateWithoutMensajesInput = {
    telefonoRevelado?: boolean
    creadoEn?: Date | string
    publicacion: PublicacionCreateNestedOneWithoutConversacionesInput
    comprador: UsuarioCreateNestedOneWithoutConversacionesComoCompradorInput
    vendedor: UsuarioCreateNestedOneWithoutConversacionesComoVendedorInput
  }

  export type ConversacionUncheckedCreateWithoutMensajesInput = {
    id?: number
    publicacionId: number
    compradorId: number
    vendedorId: number
    telefonoRevelado?: boolean
    creadoEn?: Date | string
  }

  export type ConversacionCreateOrConnectWithoutMensajesInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
  }

  export type UsuarioCreateWithoutMensajesInput = {
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
    publicaciones?: PublicacionCreateNestedManyWithoutVendedorInput
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutCompradorInput
    conversacionesComoComprador?: ConversacionCreateNestedManyWithoutCompradorInput
    conversacionesComoVendedor?: ConversacionCreateNestedManyWithoutVendedorInput
  }

  export type UsuarioUncheckedCreateWithoutMensajesInput = {
    id?: number
    nombre: string
    correo: string
    passwordHash: string
    telefono?: string | null
    rol?: string
    creadoEn?: Date | string
    publicaciones?: PublicacionUncheckedCreateNestedManyWithoutVendedorInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutCompradorInput
    conversacionesComoComprador?: ConversacionUncheckedCreateNestedManyWithoutCompradorInput
    conversacionesComoVendedor?: ConversacionUncheckedCreateNestedManyWithoutVendedorInput
  }

  export type UsuarioCreateOrConnectWithoutMensajesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMensajesInput, UsuarioUncheckedCreateWithoutMensajesInput>
  }

  export type ConversacionUpsertWithoutMensajesInput = {
    update: XOR<ConversacionUpdateWithoutMensajesInput, ConversacionUncheckedUpdateWithoutMensajesInput>
    create: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
    where?: ConversacionWhereInput
  }

  export type ConversacionUpdateToOneWithWhereWithoutMensajesInput = {
    where?: ConversacionWhereInput
    data: XOR<ConversacionUpdateWithoutMensajesInput, ConversacionUncheckedUpdateWithoutMensajesInput>
  }

  export type ConversacionUpdateWithoutMensajesInput = {
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacion?: PublicacionUpdateOneRequiredWithoutConversacionesNestedInput
    comprador?: UsuarioUpdateOneRequiredWithoutConversacionesComoCompradorNestedInput
    vendedor?: UsuarioUpdateOneRequiredWithoutConversacionesComoVendedorNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutMensajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    compradorId?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutMensajesInput = {
    update: XOR<UsuarioUpdateWithoutMensajesInput, UsuarioUncheckedUpdateWithoutMensajesInput>
    create: XOR<UsuarioCreateWithoutMensajesInput, UsuarioUncheckedCreateWithoutMensajesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMensajesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMensajesInput, UsuarioUncheckedUpdateWithoutMensajesInput>
  }

  export type UsuarioUpdateWithoutMensajesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUpdateManyWithoutVendedorNestedInput
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutCompradorNestedInput
    conversacionesComoComprador?: ConversacionUpdateManyWithoutCompradorNestedInput
    conversacionesComoVendedor?: ConversacionUpdateManyWithoutVendedorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMensajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUncheckedUpdateManyWithoutVendedorNestedInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutCompradorNestedInput
    conversacionesComoComprador?: ConversacionUncheckedUpdateManyWithoutCompradorNestedInput
    conversacionesComoVendedor?: ConversacionUncheckedUpdateManyWithoutVendedorNestedInput
  }

  export type PublicacionCreateWithoutReportesInput = {
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    vendedor: UsuarioCreateNestedOneWithoutPublicacionesInput
    categoria: CategoriaCreateNestedOneWithoutPublicacionesInput
    fotos?: PublicacionFotoCreateNestedManyWithoutPublicacionInput
    alertas?: AlertaCreateNestedManyWithoutPublicacionInput
    conversaciones?: ConversacionCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionUncheckedCreateWithoutReportesInput = {
    id?: number
    vendedorId: number
    categoriaId: number
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
    fotos?: PublicacionFotoUncheckedCreateNestedManyWithoutPublicacionInput
    alertas?: AlertaUncheckedCreateNestedManyWithoutPublicacionInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionCreateOrConnectWithoutReportesInput = {
    where: PublicacionWhereUniqueInput
    create: XOR<PublicacionCreateWithoutReportesInput, PublicacionUncheckedCreateWithoutReportesInput>
  }

  export type PublicacionUpsertWithoutReportesInput = {
    update: XOR<PublicacionUpdateWithoutReportesInput, PublicacionUncheckedUpdateWithoutReportesInput>
    create: XOR<PublicacionCreateWithoutReportesInput, PublicacionUncheckedCreateWithoutReportesInput>
    where?: PublicacionWhereInput
  }

  export type PublicacionUpdateToOneWithWhereWithoutReportesInput = {
    where?: PublicacionWhereInput
    data: XOR<PublicacionUpdateWithoutReportesInput, PublicacionUncheckedUpdateWithoutReportesInput>
  }

  export type PublicacionUpdateWithoutReportesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    vendedor?: UsuarioUpdateOneRequiredWithoutPublicacionesNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPublicacionesNestedInput
    fotos?: PublicacionFotoUpdateManyWithoutPublicacionNestedInput
    alertas?: AlertaUpdateManyWithoutPublicacionNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateWithoutReportesInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: PublicacionFotoUncheckedUpdateManyWithoutPublicacionNestedInput
    alertas?: AlertaUncheckedUpdateManyWithoutPublicacionNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionCreateManyVendedorInput = {
    id?: number
    categoriaId: number
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
  }

  export type BusquedaGuardadaCreateManyCompradorInput = {
    id?: number
    categoriaId: number
    palabrasClave?: string | null
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo?: number | null
    activa?: boolean
    creadoEn?: Date | string
  }

  export type ConversacionCreateManyCompradorInput = {
    id?: number
    publicacionId: number
    vendedorId: number
    telefonoRevelado?: boolean
    creadoEn?: Date | string
  }

  export type ConversacionCreateManyVendedorInput = {
    id?: number
    publicacionId: number
    compradorId: number
    telefonoRevelado?: boolean
    creadoEn?: Date | string
  }

  export type MensajeCreateManyEmisorInput = {
    id?: number
    conversacionId: number
    texto: string
    creadoEn?: Date | string
  }

  export type PublicacionUpdateWithoutVendedorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutPublicacionesNestedInput
    fotos?: PublicacionFotoUpdateManyWithoutPublicacionNestedInput
    alertas?: AlertaUpdateManyWithoutPublicacionNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPublicacionNestedInput
    reportes?: ReporteUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateWithoutVendedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: PublicacionFotoUncheckedUpdateManyWithoutPublicacionNestedInput
    alertas?: AlertaUncheckedUpdateManyWithoutPublicacionNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPublicacionNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateManyWithoutVendedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusquedaGuardadaUpdateWithoutCompradorInput = {
    palabrasClave?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    radioKm?: FloatFieldUpdateOperationsInput | number
    precioMaximo?: NullableFloatFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutBusquedasGuardadasNestedInput
    alertas?: AlertaUpdateManyWithoutBusquedaNestedInput
  }

  export type BusquedaGuardadaUncheckedUpdateWithoutCompradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    palabrasClave?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    radioKm?: FloatFieldUpdateOperationsInput | number
    precioMaximo?: NullableFloatFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    alertas?: AlertaUncheckedUpdateManyWithoutBusquedaNestedInput
  }

  export type BusquedaGuardadaUncheckedUpdateManyWithoutCompradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    palabrasClave?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    radioKm?: FloatFieldUpdateOperationsInput | number
    precioMaximo?: NullableFloatFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversacionUpdateWithoutCompradorInput = {
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacion?: PublicacionUpdateOneRequiredWithoutConversacionesNestedInput
    vendedor?: UsuarioUpdateOneRequiredWithoutConversacionesComoVendedorNestedInput
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutCompradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateManyWithoutCompradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversacionUpdateWithoutVendedorInput = {
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacion?: PublicacionUpdateOneRequiredWithoutConversacionesNestedInput
    comprador?: UsuarioUpdateOneRequiredWithoutConversacionesComoCompradorNestedInput
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutVendedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    compradorId?: IntFieldUpdateOperationsInput | number
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateManyWithoutVendedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    compradorId?: IntFieldUpdateOperationsInput | number
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUpdateWithoutEmisorInput = {
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacion?: ConversacionUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type MensajeUncheckedUpdateWithoutEmisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversacionId?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateManyWithoutEmisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversacionId?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateManyCategoriaPadreInput = {
    id?: number
    nombre: string
  }

  export type PublicacionCreateManyCategoriaInput = {
    id?: number
    vendedorId: number
    titulo: string
    descripcion: string
    cantidad: number
    unidad: string
    precio: number
    latitud: number
    longitud: number
    estado?: string
    fechaVencimiento: Date | string
    creadoEn?: Date | string
  }

  export type BusquedaGuardadaCreateManyCategoriaInput = {
    id?: number
    compradorId: number
    palabrasClave?: string | null
    latitud: number
    longitud: number
    radioKm: number
    precioMaximo?: number | null
    activa?: boolean
    creadoEn?: Date | string
  }

  export type CategoriaUpdateWithoutCategoriaPadreInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    subcategorias?: CategoriaUpdateManyWithoutCategoriaPadreNestedInput
    publicaciones?: PublicacionUpdateManyWithoutCategoriaNestedInput
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutCategoriaPadreInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    subcategorias?: CategoriaUncheckedUpdateManyWithoutCategoriaPadreNestedInput
    publicaciones?: PublicacionUncheckedUpdateManyWithoutCategoriaNestedInput
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateManyWithoutCategoriaPadreInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PublicacionUpdateWithoutCategoriaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    vendedor?: UsuarioUpdateOneRequiredWithoutPublicacionesNestedInput
    fotos?: PublicacionFotoUpdateManyWithoutPublicacionNestedInput
    alertas?: AlertaUpdateManyWithoutPublicacionNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPublicacionNestedInput
    reportes?: ReporteUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: PublicacionFotoUncheckedUpdateManyWithoutPublicacionNestedInput
    alertas?: AlertaUncheckedUpdateManyWithoutPublicacionNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPublicacionNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusquedaGuardadaUpdateWithoutCategoriaInput = {
    palabrasClave?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    radioKm?: FloatFieldUpdateOperationsInput | number
    precioMaximo?: NullableFloatFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    comprador?: UsuarioUpdateOneRequiredWithoutBusquedasGuardadasNestedInput
    alertas?: AlertaUpdateManyWithoutBusquedaNestedInput
  }

  export type BusquedaGuardadaUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    compradorId?: IntFieldUpdateOperationsInput | number
    palabrasClave?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    radioKm?: FloatFieldUpdateOperationsInput | number
    precioMaximo?: NullableFloatFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    alertas?: AlertaUncheckedUpdateManyWithoutBusquedaNestedInput
  }

  export type BusquedaGuardadaUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    compradorId?: IntFieldUpdateOperationsInput | number
    palabrasClave?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    radioKm?: FloatFieldUpdateOperationsInput | number
    precioMaximo?: NullableFloatFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionFotoCreateManyPublicacionInput = {
    id?: number
    url: string
    orden?: number
  }

  export type AlertaCreateManyPublicacionInput = {
    id?: number
    busquedaId: number
    leida?: boolean
    creadoEn?: Date | string
  }

  export type ConversacionCreateManyPublicacionInput = {
    id?: number
    compradorId: number
    vendedorId: number
    telefonoRevelado?: boolean
    creadoEn?: Date | string
  }

  export type ReporteCreateManyPublicacionInput = {
    id?: number
    motivo: string
    estado?: string
    creadoEn?: Date | string
  }

  export type PublicacionFotoUpdateWithoutPublicacionInput = {
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type PublicacionFotoUncheckedUpdateWithoutPublicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type PublicacionFotoUncheckedUpdateManyWithoutPublicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type AlertaUpdateWithoutPublicacionInput = {
    leida?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    busqueda?: BusquedaGuardadaUpdateOneRequiredWithoutAlertasNestedInput
  }

  export type AlertaUncheckedUpdateWithoutPublicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    busquedaId?: IntFieldUpdateOperationsInput | number
    leida?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaUncheckedUpdateManyWithoutPublicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    busquedaId?: IntFieldUpdateOperationsInput | number
    leida?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversacionUpdateWithoutPublicacionInput = {
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    comprador?: UsuarioUpdateOneRequiredWithoutConversacionesComoCompradorNestedInput
    vendedor?: UsuarioUpdateOneRequiredWithoutConversacionesComoVendedorNestedInput
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutPublicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    compradorId?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateManyWithoutPublicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    compradorId?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    telefonoRevelado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUpdateWithoutPublicacionInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUncheckedUpdateWithoutPublicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUncheckedUpdateManyWithoutPublicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaCreateManyBusquedaInput = {
    id?: number
    publicacionId: number
    leida?: boolean
    creadoEn?: Date | string
  }

  export type AlertaUpdateWithoutBusquedaInput = {
    leida?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacion?: PublicacionUpdateOneRequiredWithoutAlertasNestedInput
  }

  export type AlertaUncheckedUpdateWithoutBusquedaInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    leida?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaUncheckedUpdateManyWithoutBusquedaInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
    leida?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateManyConversacionInput = {
    id?: number
    emisorId: number
    texto: string
    creadoEn?: Date | string
  }

  export type MensajeUpdateWithoutConversacionInput = {
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    emisor?: UsuarioUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type MensajeUncheckedUpdateWithoutConversacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    emisorId?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateManyWithoutConversacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    emisorId?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}