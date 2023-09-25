export function isFileValid(file) {
    const minFileSize = 1024*100;
    const allowedFileTypes = ['image/jpeg', 'image/gif', 'image/png', 'text/plain'];

    if (!allowedFileTypes.includes(file.type)
      || ('text/plain' === file.type && (file.size > minFileSize))) {
      return false;
    }
    return true;
  }

export function isContentValid(content) {
    const allowedTags = {
      a: /<a\s+[^>]*>(.*?)<\/a>/gi,
      code: /<code>(.*?)<\/code>/gi,
      i: /<i>(.*?)<\/i>/gi,
      strong: /<strong>(.*?)<\/strong>/gi,
    };

    for (const tag in allowedTags) {
      if (content?.match(allowedTags[tag])) {
        content = content.replace(allowedTags[tag], '');
      }
    }

    const hasOtherTags = /<\/?[a-z][\s\S]*>/i.test(content);

    return !hasOtherTags;
  }