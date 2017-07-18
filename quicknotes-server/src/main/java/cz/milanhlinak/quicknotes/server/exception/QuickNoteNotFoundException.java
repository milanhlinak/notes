package cz.milanhlinak.quicknotes.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Thrown if quick note is not found.
 *
 * @author Milan Hlinak
 */
@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Quick note not found")
public class QuickNoteNotFoundException extends RuntimeException {

    public QuickNoteNotFoundException(String message) {
        super(message);
    }

    public QuickNoteNotFoundException(Throwable cause) {
        super(cause);
    }

    public QuickNoteNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

}
