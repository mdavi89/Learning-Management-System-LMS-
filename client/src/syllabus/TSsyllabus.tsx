import React from 'react';

const TSsyllabus: React.FC = () => {
    return (
        <div>
            <h1>Fundamentals of TypeScript Syllabus</h1>
            
            <h2>Course Overview</h2>
            <p>This course introduces the fundamentals of TypeScript, a typed superset of JavaScript that compiles to plain JavaScript. You will learn how to use TypeScript to write safer and more maintainable code.</p>

            <h2>Course Objectives</h2>
            <ul>
                <li>Understand the benefits of using TypeScript over JavaScript.</li>
                <li>Learn to set up a TypeScript development environment.</li>
                <li>Explore TypeScript type annotations, interfaces, and classes.</li>
                <li>Implement TypeScript with existing JavaScript codebases.</li>
                <li>Gain familiarity with TypeScript's tooling and compiler options.</li>
            </ul>

            <h2>Weekly Breakdown</h2>
            <h3>Week 1: Introduction to TypeScript</h3>
            <ul>
                <li>Class 1: What is TypeScript?</li>
                <li>Class 2: Setting Up TypeScript</li>
                <li>Class 3: TypeScript Basics - Types and Variables</li>
            </ul>

            <h3>Week 2: Advanced TypeScript Types</h3>
            <ul>
                <li>Class 1: Functions and Type Annotations</li>
                <li>Class 2: Interfaces and Type Aliases</li>
                <li>Class 3: Union and Intersection Types</li>
            </ul>

            <h3>Week 3: Object-Oriented Programming with TypeScript</h3>
            <ul>
                <li>Class 1: Classes and Inheritance</li>
                <li>Class 2: Abstract Classes and Interfaces</li>
                <li>Class 3: Generics in TypeScript</li>
            </ul>

            <h3>Week 4: TypeScript Tooling and Best Practices</h3>
            <ul>
                <li>Class 1: Using the TypeScript Compiler (TSC)</li>
                <li>Class 2: TypeScript Configuration (tsconfig.json)</li>
                <li>Class 3: Linting and Formatting with ESLint and Prettier</li>
            </ul>

            <h2>Final Project</h2>
            <p>Students will complete a final project that involves building a small application using TypeScript, demonstrating their understanding of the concepts covered in the course.</p>

            <h2>Resources</h2>
            <ul>
                <li><a href="https://www.typescriptlang.org/docs/">TypeScript Documentation</a></li>
                <li><a href="https://www.typescriptlang.org/docs/handbook/intro.html">TypeScript Handbook</a></li>
                <li><a href="https://eslint.org/docs/user-guide/configuring">ESLint Documentation</a></li>
            </ul>
        </div>
    );
};

export default TSsyllabus;