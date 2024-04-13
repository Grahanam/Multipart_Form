import React from 'react';
import { MathComponent } from 'react-mathjax2';
import { MathJaxProvider, MathJaxHtml } from 'mathjax3-react';

const MathJaxEquation = ({ equation }) => {
  return (
    <div id="equation">
      <MathComponent tex={equation} />
    </div>
  );
};

export default MathJaxEquation;

