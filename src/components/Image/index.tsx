import React, { useState } from 'react';
import styled from 'styled-components';
import { tokens } from '../../styles/tokens';
import { Icon } from '../Icon';

interface ImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}

interface ImageContainerProps {
  $aspectRatio?: string;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: 100%;
  padding-top: ${({ $aspectRatio = '56.25%' }) => $aspectRatio};
  background-color: ${tokens.colors.cardBackground};
  border-radius: ${tokens.borderRadius.medium};
  overflow: hidden;
`;

export const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.2s ease;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${tokens.colors.cardBackground};
  color: ${tokens.colors.textSecondary};

  .icon {
    width: 32px;
    height: 32px;
    opacity: 0.5;
  }
`;

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  aspectRatio,
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <ImageContainer $aspectRatio={aspectRatio} className={className}>
      {(isLoading || hasError) && (
        <Placeholder>
          <Icon name={hasError ? 'broken_image' : 'photo'} size={32} />
        </Placeholder>
      )}
      {!hasError && (
        <StyledImage
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          style={{ opacity: isLoading ? 0 : 1 }}
          loading="lazy"
        />
      )}
    </ImageContainer>
  );
};
