import { HtmlEndpointGenerator } from './HtmlEndpointGenerator';
import { JsonEndpointGenerator } from './JsonEndpointGenerator';

export class EndpointGenerator {
  static html = HtmlEndpointGenerator;
  static json = JsonEndpointGenerator;

  private constructor() {}
}
