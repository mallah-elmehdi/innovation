import { Typography } from '@mui/material';
import React from 'react';
import { VideoPlayer } from '../../components';
import Span from './Span';
import Link from './Link';

const Block = (block) => {
    if (block._type === 'block' && block.style === 'normal') {
        if (block.children && block.children[0] && block.children[0].text && block.children[0].text.split(':')[0].trim() === '[VIDEO]') {
            return <VideoPlayer videoId={block.children[0].text.split(':')[1].trim()} key={block._key} />;
        } else if (block.listItem === 'bullet') {
            return (
                <Typography sx={{ pl: 3 }} component="ul" key={block._key}>
                    {block.children.map((child) => (
                        <Typography
                            component="li"
                            sx={(theme) => ({
                                fontSize: theme.fontSize.sm,
                                color: theme.palette.common.black,
                            })}
                            key={child._key}
                        >
                            {Span(child)}
                        </Typography>
                    ))}
                </Typography>
            );
        } else if (block.markDefs.length > 0 && block.markDefs[0]._type === 'link') {
            return (
                <>
                    {block.children.map((child) => {
                        if (child.marks.includes(block.markDefs[0]._key)) {
                            return <Link markDefs={block.markDefs} text={child.text} />;
                        } else {
                            return <Typography key={block._key}>{Span(child)}</Typography>;
                        }
                    })}
                </>
            );
        } else {
            return <Typography key={block._key}>{block.children.map((child) => Span(child))}</Typography>;
        }
    } else {
        return null;
    }
};

export default Block;
