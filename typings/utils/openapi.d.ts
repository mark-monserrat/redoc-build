import { OpenAPIParser } from '../services/OpenAPIParser';
import { OpenAPIMediaType, OpenAPIOperation, OpenAPIParameter, OpenAPISchema, OpenAPIServer, Referenced } from '../types';
export declare function isStatusCode(statusCode: string): boolean;
export declare function getStatusCodeType(statusCode: string | number, defaultAsError?: boolean): string;
export declare function isOperationName(key: string): boolean;
export declare function getOperationSummary(operation: OpenAPIOperation): string;
export declare function detectType(schema: OpenAPISchema): string;
export declare function isPrimitiveType(schema: OpenAPISchema, type?: string | undefined): boolean;
export declare function isJsonLike(contentType: string): boolean;
export declare function langFromMime(contentType: string): string;
export declare function isNamedDefinition(pointer?: string): boolean;
export declare function humanizeConstraints(schema: OpenAPISchema): string[];
export declare function sortByRequired(fields: Array<{
    required: boolean;
    name: string;
}>, order?: string[]): void;
export declare function sortByField<T extends string>(fields: Array<{
    [P in T]: string;
}>, param: T): void;
export declare function mergeParams(parser: OpenAPIParser, pathParams?: Array<Referenced<OpenAPIParameter>>, operationParams?: Array<Referenced<OpenAPIParameter>>): Array<Referenced<OpenAPIParameter>>;
export declare function mergeSimilarMediaTypes(types: Dict<OpenAPIMediaType>): Dict<OpenAPIMediaType>;
export declare function normalizeServers(specUrl: string | undefined, servers: OpenAPIServer[]): OpenAPIServer[];
export declare const SECURITY_DEFINITIONS_COMPONENT_NAME = "security-definitions";
export declare let SECURITY_SCHEMES_SECTION_PREFIX: string;
export declare function setSecuritySchemePrefix(prefix: string): void;
export declare const shortenHTTPVerb: (verb: any) => any;
export declare function isRedocExtension(key: string): boolean;
export declare function extractExtensions(obj: object, showExtensions: string[] | true): Dict<any>;
