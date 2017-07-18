package cz.milanhlinak.quicknotes.server;

import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.PathResourceResolver;

/**
 * Quick Notes server runner.
 *
 * @author Milan Hlinak
 */
@SpringBootApplication
public class QuickNotesServerRunner extends WebMvcConfigurerAdapter {

    private static final Logger LOG = LoggerFactory.getLogger(
            QuickNotesServerRunner.class);

    public static void main(String[] args) {
        LOG.info("Starting Quick Notes server...");
        SpringApplication.run(QuickNotesServerRunner.class, args);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        registry.addResourceHandler(
                "/**/*.css",
                "/**/*.js")
                .addResourceLocations("classpath:/static/");

        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/index.html")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(String resourcePath,
                            Resource location) throws IOException {
                        return location.exists() && location.isReadable()
                                ? location : null;
                    }
                });
    }

}
