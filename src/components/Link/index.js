import PropTypes from 'prop-types';
import NextLink from 'next/link';

export function Link({ href, children, ...props }) {
  return (
    <NextLink
      href={href}
      passHref
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
