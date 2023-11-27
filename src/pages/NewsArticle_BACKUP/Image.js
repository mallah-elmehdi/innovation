import React from 'react';
import { Img } from '../../components';
import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '../../api/sanity';

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
    return builder.image(source);
};

const Image = (item) => {
    return <Img src={urlFor(item.item)} key={item._key} />;
};

export default Image;
