import XMLHttpRequestEventTarget from "./XMLHttpRequestEventTarget.ts";
import XMLHttpRequestUpload from "./XMLHttpRequestUpload.ts";
import XMLHttpRequestResponseType from "./XMLHttpRequestResponseType.ts";
import XMLHttpRequest from "./XMLHttpRequest.ts";
import ProgressEvent from "./ProgressEvent.ts";
import ProgressEventInit from "./ProgressEventInit.ts";

if (typeof fetch === "undefined") {
  throw new ReferenceError(
    "fetch is not defined.\n" +
      "You need a fetch() polyfill! For more information, check out the " +
      "installation guide from the readme. " +
      "https://github.com/jcbhmr/xhr#installation"
  );
}

type XMLHttpRequestEventTarget_ = typeof XMLHttpRequestEventTarget;
type XMLHttpRequestUpload_ = typeof XMLHttpRequestUpload;
type XMLHttpRequestResponseType_ = XMLHttpRequestResponseType;
type XMLHttpRequest_ = typeof XMLHttpRequest;
type ProgressEvent_ = typeof ProgressEvent;
type ProgressEventInit_ = ProgressEventInit_;
declare global {
  var XMLHttpRequestEventTarget: XMLHttpRequestEventTarget_;
  var XMLHttpRequestUpload: XMLHttpRequestUpload_;
  type XMLHttpRequestResponseType = XMLHttpRequestResponseType_;
  var XMLHttpRequest: XMLHttpRequest_;
  var ProgressEvent: ProgressEvent_;
  type ProgressEventInit = ProgressEventInit_;
}

globalThis.XMLHttpRequestEventTarget = XMLHttpRequestEventTarget;
globalThis.XMLHttpRequestUpload = XMLHttpRequestUpload;
globalThis.XMLHttpRequest = XMLHttpRequest;
globalThis.ProgressEvent = ProgressEvent;
