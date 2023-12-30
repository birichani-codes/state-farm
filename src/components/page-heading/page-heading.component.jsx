// page-heading.component.jsx
import React from 'react';
import { HeadingContainer, HeadingTitle, StateFarmText, AdditionalText } from './page-heading.styles';

const PageHeading = ({ headings }) => {
  return (
    <div>
      {headings.map((heading, index) => (
        <HeadingContainer key={index}>
          {heading.title && <HeadingTitle><StateFarmText>{heading.title}</StateFarmText></HeadingTitle>}
          {heading.additionalText && <AdditionalText>{heading.additionalText}</AdditionalText>}
        </HeadingContainer>
      ))}
    </div>
  );
};

export default PageHeading;
