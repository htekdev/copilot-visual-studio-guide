// =============================================================================
// Comment-First Development Pattern with GitHub Copilot
// =============================================================================
// 
// Source: Microsoft Learn - Get started with GitHub Copilot completions
// URL: https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-extension
//
// This demonstrates the "comment-first" approach where you write natural language
// comments and let Copilot generate the implementation code.
//
// How it works:
// 1. Type a descriptive comment explaining what you want
// 2. Press Enter and Copilot suggests code as gray "ghost text"
// 3. Press Tab to accept, Esc to reject, or keep typing to ignore
// =============================================================================

using System;

namespace CopilotSamples.Completions
{
    /// <summary>
    /// Examples from official Microsoft Learn documentation showing how to use
    /// natural language comments to generate code with GitHub Copilot.
    /// </summary>
    public class CommentFirstExamples
    {
        // =====================================================================
        // EXAMPLE 1: Simple method generation
        // =====================================================================
        // From docs: "In the editor, enter a comment or a method signature to 
        // see inline code suggestions from Copilot."
        //
        // Type this comment, then press Enter:
        
        // method to add two numbers
        public int AddNumbers(int a, int b)
        {
            return a + b;
        }

        // =====================================================================
        // EXAMPLE 2: Method signature completion
        // =====================================================================
        // From docs: Start typing a method signature and Copilot will suggest
        // the implementation.
        //
        // Type "int subtractNumbers(" and Copilot suggests the rest:
        
        int SubtractNumbers(int a, int b)
        {
            return a - b;
        }

        // =====================================================================
        // EXAMPLE 3: Inline variable completion
        // =====================================================================
        // From docs: Copilot provides whole-line completions as you type.
        // 
        // Type these lines and watch Copilot complete them:
        //   int a = 5;
        //   int b = 10;
        //   int sum  <- Copilot suggests: = a + b;
        
        public int DemoVariableCompletion()
        {
            int a = 5;
            int b = 10;
            int sum = a + b;  // Copilot auto-completed this
            return sum;
        }

        // =====================================================================
        // EXAMPLE 4: Documentation comments (XML docs)
        // =====================================================================
        // From docs: "To use automatic generation of documentation comments...
        // type the comment pattern according to your configuration (///)."
        //
        // Position cursor above a method and type "///" to generate XML docs:
        
        /// <summary>
        /// Calculates the factorial of a given number.
        /// </summary>
        /// <param name="n">The non-negative integer to calculate factorial for.</param>
        /// <returns>The factorial of n.</returns>
        /// <exception cref="ArgumentException">Thrown when n is negative.</exception>
        public long Factorial(int n)
        {
            if (n < 0)
                throw new ArgumentException("Number must be non-negative", nameof(n));
            if (n <= 1)
                return 1;
            return n * Factorial(n - 1);
        }

        // =====================================================================
        // EXAMPLE 5: More complex operations via comments
        // =====================================================================
        // The more descriptive your comment, the better the suggestion.
        
        // method to check if a string is a palindrome, ignoring case and spaces
        public bool IsPalindrome(string text)
        {
            if (string.IsNullOrEmpty(text))
                return true;
            
            var cleaned = text.ToLower().Replace(" ", "");
            var reversed = new string(cleaned.Reverse().ToArray());
            return cleaned == reversed;
        }

        // method to find the maximum element in an array
        public int FindMax(int[] numbers)
        {
            if (numbers == null || numbers.Length == 0)
                throw new ArgumentException("Array cannot be null or empty");
            
            int max = numbers[0];
            foreach (var num in numbers)
            {
                if (num > max)
                    max = num;
            }
            return max;
        }
    }
}

// =============================================================================
// KEY TIPS FROM MICROSOFT DOCUMENTATION:
// =============================================================================
// 
// 1. Be specific in comments - the more context, the better the suggestion
// 2. Use method signatures - Copilot can complete from partial signatures
// 3. Press Tab to accept suggestions, Esc to reject
// 4. Type "///" above methods to auto-generate XML documentation
// 5. Copilot works with C#, C++, Python, JavaScript, TypeScript, and more
//
// Reference: https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-extension
// =============================================================================
