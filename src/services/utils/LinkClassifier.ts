import { Embed, Link } from '@/types';
import { LinkType } from '@/types';
import { ELink } from '@/types/extracted';

export class LinkClassifier {
  static classify({ url, caption }: ELink): Link {
    let type = LinkType.Other;

    if (url === '/conversations') {
      type = LinkType.Conversation;
    }
    if (url.startsWith('https://www.facebook.com/')) {
      type = LinkType.Facebook;
    }
    if (
      url.match(/^https:\/\/([\w-]+).fanbox.cc\//) ||
      url.startsWith('https://www.pixiv.net/fanbox/')
    ) {
      type = LinkType.Fanbox;
    }
    if (url.startsWith('https://github.com/')) {
      type = LinkType.GitHub;
    }
    if (url.startsWith('https://www.instagram.com/')) {
      type = LinkType.Instagram;
    }
    if (url.startsWith('https://line.me/')) {
      type = LinkType.Line;
    }
    if (url.startsWith('https://www.nicovideo.jp/')) {
      type = LinkType.NicoNico;
    }
    if (url.startsWith('https://www.pixiv.net/')) {
      type = LinkType.Pixiv;
    }
    if (url.startsWith('https://soundcloud.com/')) {
      type = LinkType.SoundCloud;
    }
    if (url.startsWith('https://www.tumblr.com/')) {
      type = LinkType.Tumblr;
    }
    if (url.startsWith('https://vimeo.com/')) {
      type = LinkType.Vimeo;
    }
    if (url.startsWith('https://hub.vroid.com/')) {
      type = LinkType.VRoid;
    }
    if (url.startsWith('https://www.youtube.com/')) {
      type = LinkType.YouTube;
    }
    if (url.startsWith('https://twitter.com/') || url.startsWith('https://x.com/')) {
      type = LinkType.XTwitter;
    }

    return { type, url, caption };
  }

  static classifyEmbed(html: string): Embed {
    let url = html.match(/src="([^"]+)"/)![1];
    let type = LinkType.Other;

    if (url.startsWith('https://hub.vroid.com/')) {
      type = LinkType.VRoid;
    }
    if (url.startsWith('https://player.vimeo.com/')) {
      type = LinkType.Vimeo;
    }
    if (url.startsWith('https://www.youtube.com/')) {
      type = LinkType.YouTube;
    }
    if (url.startsWith('https://soundcloud.com/')) {
      type = LinkType.SoundCloud;
    }
    if (url.startsWith('https://bandcamp.com/')) {
      type = LinkType.Bandcamp;
    }
    if (url.startsWith('https://www.google.com/maps/')) {
      type = LinkType.GoogleMaps;
    }
    if (url.startsWith('https://www.slideshare.net/')) {
      type = LinkType.SlideShare;
    }
    if (url.startsWith('https://sketchfab.com/')) {
      type = LinkType.Sketchfab;
    }
    if (url.startsWith('https://embed.nicovideo.jp/')) {
      type = LinkType.NicoNico;
    }

    return { type, url, html };
  }
}
