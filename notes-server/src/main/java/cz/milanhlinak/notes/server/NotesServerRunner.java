package cz.milanhlinak.notes.server;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Notes server runner.
 *
 * @author Milan Hlinak
 */
@SpringBootApplication
public class NotesServerRunner {

    private static final Logger LOG = LoggerFactory.getLogger(
            NotesServerRunner.class);

    public static void main(String[] args) {
        LOG.info("Starting server...");
        SpringApplication.run(NotesServerRunner.class, args);
    }

}
