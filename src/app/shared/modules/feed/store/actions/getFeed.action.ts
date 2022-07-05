import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'app/shared/modules/feed/store/actionTypes';
import { GetFeedResponseInterface } from 'app/shared/modules/feed/types/getFeedResponse.interface';
import { BackendErrorsInterface } from 'app/shared/types/backendErrors.interface';

export const getFeedAction = createAction(ActionTypes.GET_FEED, props<{ url: string }>());

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponseInterface }>(),
);

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);
