import React from 'react';
import {SearchOptions} from "@/shared/models";
import {defineColorGenerator, formatTagString} from "@/shared/lib/helpers";
import styles from './VideoTag.module.css';
import {SearchValueType} from "@/shared/models/SearchOptions";
import Link from "next/link";

interface VideoTagProps<T extends SearchOptions> {
  name: T;
  value: SearchValueType<T>;
}

const VideoTag = <T extends SearchOptions>({name, value}: VideoTagProps<T>) => {

  const formattedName = formatTagString(name);
  const formattedValue = formatTagString(value);

  const defineColor = defineColorGenerator(name);
  // @ts-ignore
  const color = defineColor(value);

  const href = `/?${name}=${value}&page=1`;

  return (
    <div className={styles.tagContainer}>
      <span className={styles.tagName}>{formattedName}:</span>
      <Link href={href} className={styles.tagValue} style={{color: color}}>{formattedValue}</Link>
    </div>
  );
};

export default VideoTag;
