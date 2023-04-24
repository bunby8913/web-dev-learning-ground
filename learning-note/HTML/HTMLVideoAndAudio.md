# Video + audio content

## Video and audio on the web

- Started with plugins, flash + silver light (legacy for security reason)
- Now use <video> + <audio> + JavaScript APIs
- Many video / audio content provide offers code to embed videos / audio in to website

### The <video> element

- “src”: Same as in image elements, controls the path to find the video
- “controls”: Provide play, stop and adjust volume functionality to the user
  - Can also be achieved with JavaScript APIs
  - Cannot function with controls, but not recommended
- "<video>" tag: Fallback content: displayed when the browser does not support <video> element
- Direct link to the video

#### Using multiple source formats to improve compatibility

- Videos might not play depends not the browser, several ways to prevent that

##### Contents of a media file

- Container format: Define the structure of audio/video tracks, include metadata + what codecs to use to decode
- Video tracks: main video track + alternate angle track
- Audio tracks: Different languages + commentary soundtracks
- Text tracks: Different language + commentary soundtracks
- MP4 + WebM container are generally supported by all modern browser
  - Ogg Container was popular, but has been superseded
  - Special simplified container exist, i.e. FLAC codec
  - Most browser may not support MPEG in video + audio elements, but may support MP3 due to popularity


##### Media file support in browsers

- Some popular formats are patented, browser will have to pay hefty fee to use them
- Due to legal + preferential reason, browser have to support multiple formats
- Each browser support assortment of codecs, convert video + audio to binary data + vice versa
- To ensure content work on as many browser as possible, each media fiel should use multiple formats
  - Site + user's browser need to share the same media format
- Mobile browser might support different format than Desktop
- For a single video, provide multiple, different codex version of the video (mp4, webm, etc.)
  - Taking the "src" attribute out of the actual "<video>" tag
  - Use the "type" attribute to store the MIME type of the video in source
    - Browser can use the "type" attribute to quick skip unsupported format
  - If user are unable to access any of them, provide the link to video directly, allow user to download them

##### Other <video> features

- "width" + "height": Can either be changed in HTML / CSS
  - Video will always maintain their native W/H ratio, any unfilled space will have a solid background color

- "autoplay": Make video + audio play right away
  - Not recommended, user might find them annoy

- "loop": Make video play again from beginning once finished
  - Not recommended, can also be annoy

- "muted": Make the video play muted by default
- "poster": Thumbnail for the video, image displayed before the video plays
  - Used for splash screen / advertising screen

- "preload": has 3 values, used to buffer large video files
  - "none": Do not buffer file
  - "auto": buffer the media file
  - "metadata": only buffers the metadata of the file


### The <audio> element

- Very similar to the <video> element, with minor difference
  - Takes less space than the video player
  - Does not support width/height attributes
  - doesn't support poster attribute

### Displaying video text tracks <track>

- Very useful when people don't want to hear audio/video content on the web

- Use webVTT file format + <track> element

  - Contain multiple string of text (cues) + metadata on when the text should be displayed
  - Limiting styling /positioning information

- Some most common cues

  - Subtitles: Translation of foreign material
  - Captions: Synchronized transcription of dialog / description of sound events
  - Timed description: Text spoken by media player, to describe important visuals to visually impaired people

- WebVTT format

  - ```web-idl
    1
    00:00:22.230 --> 00:00:24.606
    This is the first subtitle.
    ```

- To display along HTML playback

  1. Save the file as .vtt file on the server
  2. Link the vtt file to specific <audio> / <video> elements
     - After all the source element
     - Use the "kind" attribute to specify the types of cues
     - Use the "srclang" attribute to specify the language of the subtitles to the browser
     - Use the "label" attribute to identify the language they are searching for

