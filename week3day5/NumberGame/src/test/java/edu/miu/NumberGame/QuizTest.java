package edu.miu.NumberGame;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

import edu.miu.NumberGame.domain.Quiz;

public class QuizTest {
    private Quiz quizUnderTest = new Quiz();

    @Test
    public void testIsCorrect() {
        /* at first question, answer should be "9" */
        assertTrue("first question answer should be '9'", quizUnderTest.isCorrect("9"));
    }

    @Test
    public void testGetNumberQuestions() {
        /* answer should be 5 regardless of what question we're at */
        assertEquals(5, quizUnderTest.getNumQuestions());
    }

    @Test
    public void testGetNumberCorrect() {
        /* at first question, answer should be 0 */
        assertEquals(0, quizUnderTest.getNumCorrect());

        quizUnderTest.scoreAnswer(); // increments the score and the current question number
        assertEquals(1, quizUnderTest.getNumCorrect());
        assertEquals(1, quizUnderTest.getCurrentQuestionIndex());
    }
}
