import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from 'app/shared/modules/feed/components/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from 'app/shared/modules/feed/store/effects/getFeed.effect';
import { FeedService } from 'app/shared/modules/feed/services/feed.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'app/shared/modules/feed/store/reducers';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('feed', reducers), EffectsModule.forFeature([GetFeedEffect])],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
