import { ENV } from '.environments';
import { imagePaths } from '@lib/constant';
import { AxiosError } from 'axios';

export enum ResponseCode {
  SUCCESS = 200,
  NO_CONTENT = 201,
  BAD_REQUEST = 400,
  FORBIDDEN = 403,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  DEFAULT = -1,
}

export enum ResponseMessage {
  SUCCESS = 'Success',
  NO_CONTENT = 'Success with no content.',
  BAD_REQUEST = 'Bad request, try again later.',
  FORBIDDEN = 'Forbidden request, try again later.',
  UNAUTHORIZED = 'User is unauthorized, try again later.',
  NOT_FOUND = 'Url is not found, try again later.',
  INTERNAL_SERVER_ERROR = 'Internal server error, try again later.',
  DEFAULT = 'Something went wrong, try again later.',
}

export const imageNotFound = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const imgElement = event.currentTarget;
  imgElement.src = imagePaths.notFound;
  imgElement.alt = 'Image not found';
};

export const failureResponse = (code: ResponseCode, message: ResponseMessage) => ({
  code: code || ResponseCode.DEFAULT,
  message: message || ResponseMessage.DEFAULT,
});

export const responseHandler = (error: AxiosError) => {
  if (!ENV.isProduction) return failureResponse(error.code as any, error.message as any);

  const { response } = error;
  if (!response?.status) return failureResponse(ResponseCode.DEFAULT, ResponseMessage.DEFAULT);

  switch (response?.status) {
    case ResponseCode.SUCCESS:
      return failureResponse(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
    case ResponseCode.NO_CONTENT:
      return failureResponse(ResponseCode.NO_CONTENT, ResponseMessage.NO_CONTENT);
    case ResponseCode.BAD_REQUEST:
      return failureResponse(ResponseCode.BAD_REQUEST, ResponseMessage.BAD_REQUEST);
    case ResponseCode.FORBIDDEN:
      return failureResponse(ResponseCode.FORBIDDEN, ResponseMessage.FORBIDDEN);
    case ResponseCode.UNAUTHORIZED:
      return failureResponse(ResponseCode.UNAUTHORIZED, ResponseMessage.UNAUTHORIZED);
    case ResponseCode.NOT_FOUND:
      return failureResponse(ResponseCode.NOT_FOUND, ResponseMessage.NOT_FOUND);
    case ResponseCode.INTERNAL_SERVER_ERROR:
      return failureResponse(ResponseCode.INTERNAL_SERVER_ERROR, ResponseMessage.INTERNAL_SERVER_ERROR);
    default:
      return failureResponse(ResponseCode.DEFAULT, ResponseMessage.DEFAULT);
  }
};
