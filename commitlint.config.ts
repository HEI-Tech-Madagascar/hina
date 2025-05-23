/**
 * Commitlint Configuration
 *
 * Enforces conventional commit messages based on the
 * `@commitlint/config-conventional` preset with custom rules.
 *
 * See: https://commitlint.js.org/
 *
 * Configuration Summary:
 * - extends: Uses base rules from `@commitlint/config-conventional`.
 * - parserPreset: Parses commits using `conventional-changelog-atom`.
 * - formatter: Formats output with `@commitlint/format`.
 * - rules:
 *   - type-enum: Allowed commit types.
 *   - scope-enum: Allowed commit scopes.
 */

import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation changes
        'style', // Formatting, no code change
        'refactor', // Code restructuring without feature/fix
        'perf', // Performance improvements
        'test', // Adding or fixing tests
        'build', // Build system or dependencies
        'ci', // Continuous integration
        'chore', // Maintenance tasks
        'revert', // Reverting commits
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'ui', // User Interface
        'ux', // User Experience
        'ci', // Continuous Integration
        'bug', // Bug fixes
        'deps', // Dependency updates
        'test', // Testing-related changes
        'docs', // Documentation
        'auth', // Authentication
        'build', // Build scripts/configuration
        'setup', // Project setup
        'other', // Miscellaneous
        'style', // Code style/formatting
        'config', // Configuration files
        'release', // Release process
        'feature', // Feature-specific changes
        'refactor', // Refactoring
      ],
    ],
  },
};

export default Configuration;
