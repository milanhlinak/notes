package cz.milanhlinak.notes.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Thrown if note is not found.
 *
 * @author Milan Hlinak
 */
@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Note not found")
public class NoteNotFoundException extends RuntimeException {

    public NoteNotFoundException(String message) {
        super(message);
    }

    public NoteNotFoundException(Throwable cause) {
        super(cause);
    }

    public NoteNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

}
