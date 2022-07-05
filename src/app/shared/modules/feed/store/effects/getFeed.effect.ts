import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'app/shared/modules/feed/store/actions/getFeed.action';
import { GetFeedResponseInterface } from 'app/shared/modules/feed/types/getFeedResponse.interface';
import { FeedService } from 'app/shared/modules/feed/services/feed.service';

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed });
          }),
          catchError(() => of(getFeedFailureAction())),
        );
      }),
    ),
  );

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
