using System;
using System.Text;
using System.Linq;

class Program
{
    const int MAX_ELEMENTS = 100;
    const int MIN_ELEMENTS = 1;
    const string ELEMENTS_PROMPT = "Enter the number of elements ({0}-{1}): ";
    const string INVALID_INPUT_MESSAGE = "Invalid input. Please provide a digit ranging from {0} to {1}.";
    const string ENTER_INTEGERS_MESSAGE = "Enter {0} integers:";
    const string INVALID_INTEGER_MESSAGE = "Invalid input. Please enter valid integers.";
    const string SUM_MESSAGE = "Sum of the numbers: ";

    /// <summary>
    /// Calculates the sum of the elements in the array.
    /// </summary>
    /// <param name="numbers">Array of integers.</param>
    /// <returns>The sum of the elements in the array.</returns>
    static int CalculateSum(int[] numbers)
    {
        return numbers.Sum();
    }

    /// <summary>
    /// Prompts the user to enter a valid number of elements.
    /// </summary>
    /// <returns>The valid number of elements entered by the user.</returns>
    static int GetValidNumberOfElements()
    {
        int numberOfElements;
        Console.Write(ELEMENTS_PROMPT, MIN_ELEMENTS, MAX_ELEMENTS);
        while (!int.TryParse(Console.ReadLine(), out numberOfElements) || numberOfElements < MIN_ELEMENTS || numberOfElements > MAX_ELEMENTS)
        {
            Console.WriteLine(INVALID_INPUT_MESSAGE, MIN_ELEMENTS, MAX_ELEMENTS);
        }
        return numberOfElements;
    }

    /// <summary>
    /// Prompts the user to enter the specified number of integers.
    /// </summary>
    /// <param name="numberOfElements">The number of integers to be entered.</param>
    /// <returns>An array of integers entered by the user.</returns>
    static int[] GetArrayInput(int numberOfElements)
    {
        int[] numbers = new int[numberOfElements];
        Console.WriteLine(ENTER_INTEGERS_MESSAGE, numberOfElements);
        for (int i = 0; i < numberOfElements; i++)
        {
            string input;
            while (!int.TryParse(input = Console.ReadLine(), out numbers[i]))
            {
                Console.WriteLine(INVALID_INTEGER_MESSAGE);
            }
        }
        return numbers;
    }

    /// <summary>
    /// The main entry point of the program.
    /// </summary>
    static void Main()
    {
        int numberOfElements = GetValidNumberOfElements();
        int[] numbers = GetArrayInput(numberOfElements);
        int sum = CalculateSum(numbers);
        Console.WriteLine(SUM_MESSAGE + sum);
    }
}